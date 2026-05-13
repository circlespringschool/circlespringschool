import http from "node:http";
import url from "node:url";
import path from "node:path";
import fs from "node:fs";

const ROOT = process.cwd();
const PORT = Number(process.env.PORT || 3000);

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve(null);
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(raw);
      }
    });
  });
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8", ...headers });
  res.end(body || "");
}

function sendFile(res, filePath) {
  try {
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) return false;
    const ext = path.extname(filePath).toLowerCase();
    const contentType =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".css"
          ? "text/css; charset=utf-8"
          : ext === ".js"
            ? "text/javascript; charset=utf-8"
            : ext === ".json"
              ? "application/json; charset=utf-8"
              : ext === ".yml" || ext === ".yaml"
                ? "text/yaml; charset=utf-8"
                : ext === ".png"
                  ? "image/png"
                  : ext === ".jpg" || ext === ".jpeg"
                    ? "image/jpeg"
                    : "application/octet-stream";

    res.writeHead(200, { "content-type": contentType, "content-length": stat.size });
    fs.createReadStream(filePath).pipe(res);
    return true;
  } catch {
    return false;
  }
}

async function handleApi(req, res, pathname) {
  const apiRel = pathname.replace(/^\/api\//, "");
  const file = path.join(ROOT, "api", apiRel + ".js");

  if (!fs.existsSync(file)) return send(res, 404, "Not Found");

  const mod = await import(url.pathToFileURL(file).href + "?t=" + Date.now());
  const handler = mod?.default;
  if (typeof handler !== "function") return send(res, 500, "Invalid handler");

  // Minimal Vercel-like request shape.
  req.query = Object.fromEntries(new URL(req.url, "http://localhost").searchParams.entries());
  req.body = await readBody(req);

  const originalJson = res.json?.bind(res);
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (obj) => {
    const txt = JSON.stringify(obj);
    res.writeHead(res.statusCode || 200, { "content-type": "application/json; charset=utf-8" });
    res.end(txt);
  };
  res.redirect = (to) => {
    res.writeHead(302, { location: to });
    res.end();
  };
  res.send = (body) => {
    if (typeof body === "string") {
      res.writeHead(res.statusCode || 200, { "content-type": "text/html; charset=utf-8" });
      res.end(body);
      return;
    }
    res.writeHead(res.statusCode || 200, { "content-type": "application/octet-stream" });
    res.end(body);
  };

  return handler(req, res).catch((e) => {
    console.error("API handler error:", pathname, e);
    send(res, 500, "Internal Error");
  });
}

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");

  if (pathname.startsWith("/api/")) return handleApi(req, res, pathname);

  // Static file serving (same behavior as current `serve .` but with /api support).
  const p =
    pathname === "/"
      ? path.join(ROOT, "index.html")
      : path.join(ROOT, pathname.replace(/^\//, ""));

  if (sendFile(res, p)) return;
  send(res, 404, "Not Found");
});

server.listen(PORT, () => {
  console.log(`dev-server listening on http://localhost:${PORT}`);
});

