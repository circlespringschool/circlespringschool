import {
  getOctokitApp,
  getRepoFromEnv,
  listTreePaths,
  getFileText,
  getFileBase64,
  upsertFileText,
  upsertFileBase64,
  deleteFile,
} from "./_lib/githubApp.js";
import { readSession } from "./_lib/session.js";

function badRequest(res, msg) {
  return res.status(400).json({ error: msg });
}

function notFound(res, msg) {
  return res.status(404).json({ error: msg });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const session = readSession(req);
  if (!session?.sub) return res.status(401).json({ error: "Not authenticated" });

  const { action, params, branch } = req.body || {};
  if (!action || typeof action !== "string") return badRequest(res, "Missing action");
  if (!params || typeof params !== "object") return badRequest(res, "Missing params");

  const octokit = getOctokitApp();
  const { owner, repo } = getRepoFromEnv();
  const ref = (branch && typeof branch === "string" ? branch : params.branch) || "main";

  try {
    switch (action) {
      case "entriesByFolder": {
        const folder = params.folder;
        const extension = params.extension;
        const depth = Number(params.depth ?? 1);
        if (!folder || !extension) return badRequest(res, "Missing folder/extension");

        const all = await listTreePaths({ octokit, owner, repo, ref });
        const normalizedFolder = String(folder).replace(/^\//, "").replace(/\/$/, "");
        const maxDepth = Math.max(1, depth);

        const matches = all.filter(({ path }) => {
          if (!path.startsWith(normalizedFolder + "/")) return false;
          if (!path.endsWith(extension)) return false;
          const rel = path.slice(normalizedFolder.length + 1);
          const relDepth = rel.split("/").length;
          return relDepth <= maxDepth;
        });

        const entries = await Promise.all(
          matches.map(async ({ path, sha }) => {
            const { text } = await getFileText({ octokit, owner, repo, path, ref });
            return { data: text, file: { path, id: sha || null } };
          }),
        );

        return res.status(200).json(entries);
      }

      case "getEntry": {
        const path = params.path;
        if (!path) return badRequest(res, "Missing path");
        const { text, sha } = await getFileText({ octokit, owner, repo, path, ref });
        return res.status(200).json({ data: text, file: { path, id: sha || null } });
      }

      case "persistEntry": {
        const dataFiles = params.dataFiles;
        const assets = params.assets;
        const options = params.options || {};
        const commitMessage = options.commitMessage || "Update content";
        if (!Array.isArray(dataFiles) || dataFiles.length === 0) return badRequest(res, "Missing dataFiles");

        // Persist each data file to the repo.
        await Promise.all(
          dataFiles.map(async (df) => {
            if (!df?.path || typeof df.raw !== "string") throw new Error("Invalid dataFile");
            await upsertFileText({
              octokit,
              owner,
              repo,
              path: df.path,
              ref,
              message: commitMessage,
              text: df.raw,
            });
          }),
        );

        if (Array.isArray(assets) && assets.length) {
          await Promise.all(
            assets.map(async (a) => {
              if (!a?.path || typeof a.content !== "string") return;
              if ((a.encoding || "base64") !== "base64") throw new Error("Unsupported asset encoding");
              await upsertFileBase64({
                octokit,
                owner,
                repo,
                path: a.path,
                ref,
                message: commitMessage,
                base64: a.content,
              });
            }),
          );
        }

        return res.status(200).json({ success: true });
      }

      case "deleteFiles": {
        const paths = params.paths;
        const options = params.options || {};
        const commitMessage = options.commitMessage || params.commitMessage || "Delete files";
        if (!Array.isArray(paths) || paths.length === 0) return badRequest(res, "Missing paths");
        await Promise.all(
          paths.map(async (p) => {
            await deleteFile({ octokit, owner, repo, path: p, ref, message: commitMessage });
          }),
        );
        return res.status(200).json({ success: true });
      }

      // Editorial workflow actions are not supported in this minimal implementation.
      case "unpublishedEntries":
      case "unpublishedEntry":
      case "unpublishedEntryDataFile":
      case "unpublishedEntryMediaFile":
      case "deleteUnpublishedEntry":
      case "updateUnpublishedEntryStatus":
      case "publishUnpublishedEntry":
      case "getDeployPreview":
        return notFound(res, `Action not supported: ${action}`);

      // Media actions are optional; return empty list for now.
      case "getMedia": {
        const mediaFolder = (params.mediaFolder || params.media_folder || "src/imgs").replace(/^\//, "").replace(/\/$/, "");
        const all = await listTreePaths({ octokit, owner, repo, ref });
        const files = all.filter(({ path }) => path.startsWith(mediaFolder + "/"));
        const media = await Promise.all(
          files.map(async ({ path, sha }) => {
            const { content } = await getFileBase64({ octokit, owner, repo, path, ref });
            const name = path.split("/").pop() || path;
            return { id: sha || "", content, encoding: "base64", name, path };
          }),
        );
        return res.status(200).json(media);
      }

      case "getMediaFile": {
        const path = params.path;
        if (!path) return badRequest(res, "Missing path");
        const { content, sha } = await getFileBase64({ octokit, owner, repo, path, ref });
        const name = String(path).split("/").pop() || String(path);
        return res.status(200).json({ id: sha || "", content, encoding: "base64", name, path });
      }

      case "persistMedia": {
        const asset = params.asset;
        const options = params.options || {};
        const commitMessage = options.commitMessage || "Upload media";
        if (!asset?.path || typeof asset.content !== "string") return badRequest(res, "Missing asset");
        if ((asset.encoding || "base64") !== "base64") throw new Error("Unsupported asset encoding");
        await upsertFileBase64({ octokit, owner, repo, path: asset.path, ref, message: commitMessage, base64: asset.content });
        const name = String(asset.path).split("/").pop() || String(asset.path);
        return res.status(200).json({ id: "", content: asset.content, encoding: "base64", name, path: asset.path });
      }

      default:
        return notFound(res, `Unknown action: ${action}`);
    }
  } catch (e) {
    console.error("Decap proxy error:", e);
    return res.status(500).json({ error: e?.message || "Internal error" });
  }
}

