import db from '../db.js';

export async function findAdminByUsername(username) {
  const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);
  return result.rows[0];
}
