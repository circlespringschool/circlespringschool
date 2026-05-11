import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

function requiredEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export function getRepoFromEnv() {
  const repo = requiredEnv("CMS_REPO"); // format: owner/name
  const [owner, name] = repo.split("/");
  if (!owner || !name) throw new Error(`Invalid CMS_REPO "${repo}". Expected "owner/name".`);
  return { owner, repo: name };
}

export function getOctokitApp() {
  const appId = requiredEnv("GITHUB_APP_ID");
  const installationId = requiredEnv("GITHUB_APP_INSTALLATION_ID");
  const privateKey = requiredEnv("GITHUB_APP_PRIVATE_KEY").replace(/\\n/g, "\n");

  return new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId,
      installationId,
      privateKey,
    },
  });
}

export async function getDefaultBranch(octokit, owner, repo) {
  const { data } = await octokit.repos.get({ owner, repo });
  return data.default_branch || "main";
}

function toBase64Utf8(content) {
  return Buffer.from(content, "utf8").toString("base64");
}

export function toBase64Bytes(buffer) {
  return Buffer.from(buffer).toString("base64");
}

export async function getFileText({ octokit, owner, repo, path, ref }) {
  const { data } = await octokit.repos.getContent({ owner, repo, path, ref });
  if (Array.isArray(data)) throw new Error(`Expected file but got directory for "${path}"`);
  const encoding = data.encoding || "base64";
  if (encoding !== "base64") throw new Error(`Unsupported encoding "${encoding}" for "${path}"`);
  const buf = Buffer.from(data.content || "", "base64");
  return { text: buf.toString("utf8"), sha: data.sha };
}

export async function getFileBase64({ octokit, owner, repo, path, ref }) {
  const { data } = await octokit.repos.getContent({ owner, repo, path, ref });
  if (Array.isArray(data)) throw new Error(`Expected file but got directory for "${path}"`);
  const encoding = data.encoding || "base64";
  if (encoding !== "base64") throw new Error(`Unsupported encoding "${encoding}" for "${path}"`);
  return { content: data.content || "", sha: data.sha };
}

export async function upsertFileText({ octokit, owner, repo, path, ref, message, text }) {
  let sha;
  try {
    const existing = await octokit.repos.getContent({ owner, repo, path, ref });
    if (!Array.isArray(existing.data)) sha = existing.data.sha;
  } catch (e) {
    // create if missing
  }

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message,
    content: toBase64Utf8(text),
    sha,
    branch: ref,
  });
}

export async function upsertFileBase64({ octokit, owner, repo, path, ref, message, base64 }) {
  let sha;
  try {
    const existing = await octokit.repos.getContent({ owner, repo, path, ref });
    if (!Array.isArray(existing.data)) sha = existing.data.sha;
  } catch (e) {
    // create if missing
  }

  await octokit.repos.createOrUpdateFileContents({
    owner,
    repo,
    path,
    message,
    content: base64,
    sha,
    branch: ref,
  });
}

export async function deleteFile({ octokit, owner, repo, path, ref, message }) {
  const existing = await octokit.repos.getContent({ owner, repo, path, ref });
  if (Array.isArray(existing.data)) throw new Error(`Expected file but got directory for "${path}"`);
  await octokit.repos.deleteFile({
    owner,
    repo,
    path,
    message,
    sha: existing.data.sha,
    branch: ref,
  });
}

export async function listTreePaths({ octokit, owner, repo, ref }) {
  const { data: branch } = await octokit.repos.getBranch({ owner, repo, branch: ref });
  const treeSha = branch.commit.sha;
  const { data: tree } = await octokit.git.getTree({ owner, repo, tree_sha: treeSha, recursive: "1" });
  return (tree.tree || [])
    .filter((n) => n.type === "blob" && typeof n.path === "string")
    .map((n) => ({ path: n.path, sha: n.sha }));
}

