import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Tambahan
import '../Booking.css';
import Layout from '../components/Layout';

// Data perawatan berdasarkan kategori
const treatmentOptions = {
  rambut: [
    { name: 'Cuci Blow', price: 'Rp 80.000 – 160.000' },
    { name: 'Haircut', price: 'Rp 90.000 – 110.000' },
    { name: 'Curly', price: 'Rp 120.000 – 150.000' },
    { name: 'Hair Up Styling', price: 'Rp 125.000' },
    { name: 'Sanggul', price: 'Varian' },
    { name: 'Hair Mask', price: 'Varian' },
    { name: 'Creambath', price: 'Rp 145.000 – 175.000' },
    { name: 'Hairspa Loreal', price: 'Rp 225.000 – 245.000' },
    { name: 'Ozone (Anti Hair Fall)', price: 'Rp 150.000' },
    { name: 'Anti Dandruff', price: 'Varian' },
    { name: 'Hair Coloring', price: 'Rp 100.000 – 600.000' },
    { name: 'Hair Filler', price: 'Varian' },
    { name: 'After Coloring', price: 'Varian' },
    { name: 'Laminating', price: 'Varian' },
    { name: 'Highlight / Bleaching', price: 'Rp 250.000 – 1.550.000' },
    { name: 'Keratin Treatment', price: 'Rp 700.000 – 1.400.000' },
    { name: 'Rebonding / Smoothing', price: 'Rp 700.000 – 1.500.000' },
    { name: 'Basic Wave', price: 'Varian' },
  ],
  wajah: [
    { name: 'Facial', price: 'Rp 200.000' },
    { name: 'Totok Aura', price: 'Rp 150.000' },
    { name: 'Anti Aging Roller', price: 'Rp 150.000 – 255.000' },
    { name: 'Magic Light Mask', price: 'Rp 100.000' },
    { name: 'Make Up – With Hair Do', price: 'Rp 250.000 – 350.000' },
    { name: 'Make Up – Only', price: 'Rp 175.000 – 265.000' },
    { name: 'Make Up – Mata', price: 'Rp 125.000 – 185.000' },
    { name: 'Eyelash Extension', price: 'Rp 220.000 – 400.000' },
    { name: 'Eyelash Lift', price: 'Rp 75.000' },
    { name: 'Eyelash Lift + Tint', price: 'Rp 125.000' },
  ],
  tubuh: [
    { name: 'Ratus Angel', price: 'Rp 175.000' },
    { name: 'After Ratus Angel', price: 'Rp 94.000' },
    { name: 'Body Bleaching', price: 'Rp 150.000' },
    { name: 'Breast Treatment', price: 'Rp 300.000' },
    { name: 'Relief Aromatherapy Massage', price: 'Rp 330.000' },
    { name: 'Flexibility Stretching Massage', price: 'Rp 120.000' },
    { name: 'Back Therapy', price: 'Rp 100.000' },
    { name: 'Foot Stone Reflexy', price: 'Rp 100.000' },
    { name: 'Waxing', price: 'Rp 45.000 – 160.000' },
    { name: 'Manicure & Pedicure', price: 'Rp 135.000 – 260.000' },
  ]
};

const BookingForm = () => {
  const [category, setCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [availableTimes] = useState([
    '08.00 - 10.00',
    '10.00 - 12.00',
    '12.00 - 14.00',
    '14.00 - 16.00',
    '16.00 - 18.00',
    '18.00 - 20.00'
  ]);

  const navigate = useNavigate(); // ← Tambahan

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = {
      name,
      category,
      selectedService,
      time,
      date,
      address,
      age,
    };

    try {
      const existing = JSON.parse(localStorage.getItem('bookings')) || [];
      existing.push(newBooking);
      localStorage.setItem('bookings', JSON.stringify(existing));
      alert('Booking berhasil!');
    } catch (err) {
      alert('Terjadi kesalahan saat menyimpan data.');
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className="booking-form">
        <h2>Formulir Pembookingan</h2>

        <label>Kategori:</label>
        <select value={category} onChange={(e) => {
          setCategory(e.target.value);
          setSelectedService('');
        }} required>
          <option value="">--Pilih--</option>
          <option value="rambut">Rambut</option>
          <option value="wajah">Wajah</option>
          <option value="tubuh">Tubuh</option>
        </select>

        <label>Tipe Perawatan:</label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required disabled={!category}>
          <option value="">--Pilih--</option>
          {category && treatmentOptions[category].map((s, i) => (
            <option key={i} value={s.name}>{s.name} - {s.price}</option>
          ))}
        </select>

        <label>Nama:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Jam:</label>
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          <option value="">--Pilih--</option>
          {availableTimes.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>

        <label>Tanggal:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        <label>Alamat:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label>Umur:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

        <button type="submit">Book Sekarang</button>

        {/* Tombol kembali ke menu */}
        <button
          type="button"
          onClick={() => navigate('/menu')}
          className="back-button"
        >
          Kembali ke Menu
        </button>
      </form>

      <footer className="footer">
        <p>© 2013-2024, All rights reserved. Bandung - Indonesia</p>
        <p>*Konten dilindungi kebijakan "Disclaimer"</p>
      </footer>

      <button className="scroll-top-btn" onClick={handleScrollTop} title="Kembali ke atas">
        ↑
      </button>
    </Layout>
  );
};

export default BookingForm;
