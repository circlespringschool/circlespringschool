import { ensureSchema, getPool } from "../_lib/db.js";
import { readSession } from "../_lib/session.js";

export default async function handler(req, res) {
  const session = readSession(req);
  if (!session?.sub) return res.status(401).json({ error: "Not authenticated" });

  await ensureSchema();
  const pool = getPool();
  const { rows } = await pool.query(`select id, email, role, disabled, created_at, last_login_at from cms_users where id = $1`, [
    session.sub,
  ]);
  const user = rows[0];
  if (!user || user.disabled) return res.status(401).json({ error: "Not authenticated" });
  return res.status(200).json({ user });
}

