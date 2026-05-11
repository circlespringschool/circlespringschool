import bcrypt from "bcryptjs";
import { ensureSchema, getPool } from "../_lib/db.js";
import { readSession } from "../_lib/session.js";

function badRequest(res, msg) {
  return res.status(400).json({ error: msg });
}

export default async function handler(req, res) {
  const session = readSession(req);
  if (!session?.sub) return res.status(401).json({ error: "Not authenticated" });
  if (session.role !== "admin") return res.status(403).json({ error: "Forbidden" });

  await ensureSchema();
  const pool = getPool();

  if (req.method === "GET") {
    const { rows } = await pool.query(
      `select id, email, role, disabled, created_at, last_login_at from cms_users order by created_at desc`,
    );
    return res.status(200).json({ users: rows });
  }

  if (req.method === "POST") {
    const { email, password, role } = req.body || {};
    if (!email || typeof email !== "string") return badRequest(res, "Missing email");
    if (!password || typeof password !== "string" || password.length < 8) return badRequest(res, "Password must be at least 8 characters");
    const finalRole = role === "admin" ? "admin" : "editor";

    const id = crypto.randomUUID();
    const passwordHash = await bcrypt.hash(password, 12);

    try {
      const { rows } = await pool.query(
        `insert into cms_users (id, email, password_hash, role) values ($1,$2,$3,$4) returning id, email, role, disabled, created_at`,
        [id, email.toLowerCase(), passwordHash, finalRole],
      );
      return res.status(201).json({ user: rows[0] });
    } catch (e) {
      if (String(e?.message || "").includes("duplicate key")) {
        return res.status(409).json({ error: "Email already registered" });
      }
      console.error(e);
      return res.status(500).json({ error: "Create user failed" });
    }
  }

  if (req.method === "PATCH") {
    const { id, disabled, role } = req.body || {};
    if (!id || typeof id !== "string") return badRequest(res, "Missing id");

    const fields = [];
    const values = [];
    let idx = 1;
    if (typeof disabled === "boolean") {
      fields.push(`disabled = $${idx++}`);
      values.push(disabled);
    }
    if (role === "admin" || role === "editor") {
      fields.push(`role = $${idx++}`);
      values.push(role);
    }
    if (fields.length === 0) return badRequest(res, "No updates provided");

    values.push(id);
    const { rows } = await pool.query(
      `update cms_users set ${fields.join(", ")} where id = $${idx} returning id, email, role, disabled, created_at, last_login_at`,
      values,
    );
    if (!rows[0]) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ user: rows[0] });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

