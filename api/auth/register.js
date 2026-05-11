import bcrypt from "bcryptjs";
import { ensureSchema, getPool } from "../_lib/db.js";
import { setSessionCookie } from "../_lib/session.js";

function badRequest(res, msg) {
  return res.status(400).json({ error: msg });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, password, name } = req.body || {};
  if (!email || typeof email !== "string") return badRequest(res, "Missing email");
  if (!password || typeof password !== "string" || password.length < 8) return badRequest(res, "Password must be at least 8 characters");

  await ensureSchema();
  const pool = getPool();
  const id = crypto.randomUUID();
  const passwordHash = await bcrypt.hash(password, 12);

  try {
    const countRes = await pool.query(`select count(*)::int as count from cms_users`);
    const role = countRes.rows?.[0]?.count === 0 ? "admin" : "editor";

    const result = await pool.query(
      `insert into cms_users (id, email, password_hash, role) values ($1,$2,$3,$4) returning id, email, role, disabled, created_at`,
      [id, email.toLowerCase(), passwordHash, role],
    );

    setSessionCookie(res, { sub: result.rows[0].id, email: result.rows[0].email, role: result.rows[0].role });
    return res.status(201).json({ user: result.rows[0] });
  } catch (e) {
    if (String(e?.message || "").includes("duplicate key")) {
      return res.status(409).json({ error: "Email already registered" });
    }
    console.error(e);
    return res.status(500).json({ error: "Registration failed" });
  }
}

