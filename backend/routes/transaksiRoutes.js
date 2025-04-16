import express from 'express';
import { getServicesProducts, createTransaksi } from '../controllers/transaksiController.js';


const router = express.Router();

router.get('/services-products', getServicesProducts);
router.post('/transaksi', createTransaksi);


export default router;
