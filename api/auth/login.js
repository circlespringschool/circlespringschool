import bcrypt from "bcryptjs";
import { ensureSchema, getPool } from "../_lib/db.js";
import { setSessionCookie } from "../_lib/session.js";

function badRequest(res, msg) {
  return res.status(400).json({ error: msg });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { email, password } = req.body || {};
  if (!email || typeof email !== "string") return badRequest(res, "Missing email");
  if (!password || typeof password !== "string") return badRequest(res, "Missing password");

  await ensureSchema();
  const pool = getPool();

  const { rows } = await pool.query(`select id, email, password_hash, role, disabled from cms_users where email = $1`, [
    email.toLowerCase(),
  ]);
  const user = rows[0];
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  if (user.disabled) return res.status(403).json({ error: "Account disabled" });

  const ok = await bcrypt.compare(password, user.password_hash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  await pool.query(`update cms_users set last_login_at = now() where id = $1`, [user.id]);
  setSessionCookie(res, { sub: user.id, email: user.email, role: user.role });
  return res.status(200).json({ user: { id: user.id, email: user.email, role: user.role } });
}

