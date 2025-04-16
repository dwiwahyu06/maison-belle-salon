import React, { useEffect, useState } from 'react';
import '../Riwayat.css';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Riwayat = () => {
  const [bookings, setBookings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedBooking, setEditedBooking] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(stored);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedBooking({ ...bookings[index] });
  };

  const handleChange = (e) => {
    setEditedBooking({ ...editedBooking, [e.target.name]: e.target.value });
  };

  const handleUpdate = (index) => {
    const updated = [...bookings];
    updated[index] = editedBooking;
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
    setEditingIndex(null);
    alert('Data berhasil diperbarui!');
  };

  return (
    <Layout>
      <div className="booking-form">
        <h2>Riwayat Booking</h2>
        {bookings.length === 0 ? (
          <p>Belum ada data booking.</p>
        ) : (
          bookings.map((b, i) => (
            <div key={i} className="riwayat-item">
              {editingIndex === i ? (
                <>
                  <label>Nama:</label>
                  <input name="name" value={editedBooking.name} onChange={handleChange} />

                  <label>Kategori:</label>
                  <input name="category" value={editedBooking.category} onChange={handleChange} />

                  <label>Perawatan:</label>
                  <input name="selectedService" value={editedBooking.selectedService} onChange={handleChange} />

                  <label>Jam:</label>
                  <input name="time" value={editedBooking.time} onChange={handleChange} />

                  <label>Tanggal:</label>
                  <input name="date" value={editedBooking.date} onChange={handleChange} />

                  <label>Alamat:</label>
                  <input name="address" value={editedBooking.address} onChange={handleChange} />

                  <label>Umur:</label>
                  <input name="age" value={editedBooking.age} onChange={handleChange} />

                  <button onClick={() => handleUpdate(i)} className="update-button">Simpan Perubahan</button>
                </>
              ) : (
                <>
                  <p><strong>Nama:</strong> {b.name}</p>
                  <p><strong>Kategori:</strong> {b.category}</p>
                  <p><strong>Perawatan:</strong> {b.selectedService}</p>
                  <p><strong>Jam:</strong> {b.time}</p>
                  <p><strong>Tanggal:</strong> {b.date}</p>
                  <p><strong>Alamat:</strong> {b.address}</p>
                  <p><strong>Umur:</strong> {b.age}</p>
                  <hr />
                  <button onClick={() => navigate('/menu')} className="back-button">Kembali ke Menu</button>
                  <button onClick={() => handleEdit(i)} className="edit-button">Ubah</button>
                  <button onClick={() => handleDelete(i)} className="delete-button">Hapus</button>
                </>
              )}
            </div>
          ))
        )}
      </div>

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

export default Riwayat;
