import pool from '../db.js';

export const getServicesProducts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM services_products');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data', error });
  }
};


  

export const createTransaksi = async (req, res) => {
  const { customer_name, total } = req.body;
  const admin_id = 1; // Nanti bisa diambil dari token

  try {
    await pool.query(
      'INSERT INTO transaksi (customer_name, admin_id, total) VALUES ($1, $2, $3)',
      [customer_name, admin_id, total]
    );
    res.status(201).json({ message: 'Transaksi berhasil disimpan' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menyimpan transaksi', error });
  }
};
