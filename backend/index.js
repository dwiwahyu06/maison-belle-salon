import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import transaksiRoutes from './routes/transaksiRoutes.js';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', transaksiRoutes); // Booking routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
