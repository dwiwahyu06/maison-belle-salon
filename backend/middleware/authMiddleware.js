import { verifyToken } from '../config/jwtConfig.js';

export function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Token tidak ditemukan' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Simpan info user
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token tidak valid' });
  }
}

