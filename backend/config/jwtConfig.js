import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Biar bisa baca dari .env

const SECRET_KEY = process.env.JWT_SECRET || 'anata-secret-key';

export function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}
