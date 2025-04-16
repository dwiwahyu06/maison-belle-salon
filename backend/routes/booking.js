// routes/booking.js
import express from 'express';

const router = express.Router();

// POST /api/booking
router.post('/', async (req, res) => {
  const { name, category, selectedService, time, date, address, age } = req.body;

  try {
    // Cek apakah sudah ada booking pada waktu itu
    const existing = await Booking.findOne({ where: { time, date } });

    if (existing) {
      return res.status(400).json({ message: 'Waktu sudah dibooking!' });
    }

    const booking = await Booking.create({
      name,
      category,
      selectedService,
      time,
      date,
      address,
      age
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal membuat booking' });
  }
});

export default router;
