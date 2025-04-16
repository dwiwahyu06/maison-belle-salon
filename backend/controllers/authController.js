import { generateToken } from '../config/jwtConfig.js';
import * as userModel from '../models/userModel.js';
import argon2 from 'argon2';

export const authController = {
  // 🔐 REGISTER USER
  async register(req, res) {
    const { username, email, phone, password } = req.body;

    const existingUser = await userModel.findUserByIdentifier(username) ||
                         await userModel.findUserByIdentifier(email) ||
                         await userModel.findUserByIdentifier(phone);

    if (existingUser) {
      return res.status(409).json({ message: 'User sudah terdaftar' });
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = await userModel.createUser({
      username,
      email,
      phone,
      password: hashedPassword
    });

    return res.status(201).json({ message: 'Register berhasil!', user: newUser });
  },


  // 🔐 LOGIN USER
  async loginUser(req, res) {
    const { identifier, password } = req.body;

    const user = await userModel.findUserByIdentifier(identifier);

    if (!user) {
      return res.status(401).json({ message: 'Login gagal. User tidak ditemukan.' });
    }

    const isValid = await argon2.verify(user.password, password);

    if (!isValid) {
      return res.status(401).json({ message: 'Password salah.' });
    }

    const token = generateToken({ id: user.id, username: user.username, role: 'user' });

    res.cookie('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
    });

    return res.json({ message: 'Login berhasil!', token });
  },

  async getMe(req, res) {
    try {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const user = await userModel.findUserById(req.user.id);

      if (!user) {
        return res.status(404).json({ message: 'User tidak ditemukan' });
      }

      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone
      });
    } catch (error) {
      res.status(500).json({ message: 'Gagal mengambil data user' });
    }
  }

  
};
