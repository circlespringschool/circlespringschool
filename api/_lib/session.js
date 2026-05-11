import jwt from "jsonwebtoken";
import cookie from "cookie";

const COOKIE_NAME = "cms_session";

function requiredEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env var: ${name}`);
  return v;
}

export function getJwtSecret() {
  return requiredEnv("AUTH_JWT_SECRET");
}

export function setSessionCookie(res, payload, { maxAgeSeconds = 60 * 60 * 24 * 7 } = {}) {
  const token = jwt.sign(payload, getJwtSecret(), { expiresIn: maxAgeSeconds });
  const serialized = cookie.serialize(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: maxAgeSeconds,
  });
  res.setHeader("Set-Cookie", serialized);
}

export function clearSessionCookie(res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize(COOKIE_NAME, "", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: new Date(0),
    }),
  );
}

export function readSession(req) {
  const header = req.headers?.cookie || "";
  const parsed = cookie.parse(header);
  const token = parsed[COOKIE_NAME];
  if (!token) return null;
  try {
    return jwt.verify(token, getJwtSecret());
  } catch {
    return null;
  }
}

