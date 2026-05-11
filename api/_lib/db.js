import pg from "pg";

const { Pool } = pg;

let pool;

export function getPool() {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL || process.env.DB_DATABASE_URL;
    if (!connectionString) throw new Error("Missing required env var: DATABASE_URL");
    pool = new Pool({ connectionString, ssl: process.env.PGSSLMODE ? { rejectUnauthorized: false } : undefined });
  }
  return pool;
}

export async function ensureSchema() {
  const p = getPool();
  await p.query(`
    create table if not exists cms_users (
      id text primary key,
      email text unique not null,
      password_hash text not null,
      role text not null default 'editor',
      disabled boolean not null default false,
      created_at timestamptz not null default now(),
      last_login_at timestamptz
    );
  `);
}

