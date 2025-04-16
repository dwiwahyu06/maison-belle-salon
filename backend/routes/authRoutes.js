import express from 'express';
import { authController } from '../controllers/authController.js';
import verifyToken from '../middleware/verifyToken.js'; 

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.loginUser);
router.get('/me', verifyToken, authController.getMe); 
export default router;
