import db from '../db.js';

export async function createUser({ username, email, password, phone }) {
  const result = await db.query(
    `INSERT INTO users (username, email, password, phone)
     VALUES ($1, $2, $3, $4) RETURNING *`,
    [username, email, password, phone]
  );
  return result.rows[0];
}

export async function findUserByIdentifier(identifier) {
  const result = await db.query(
    `SELECT * FROM users WHERE email = $1 OR username = $1 OR phone = $1`,
    [identifier]
  );
  return result.rows[0];
}
