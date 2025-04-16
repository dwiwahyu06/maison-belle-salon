import React, { useState } from 'react';
import '../Menu.css';
import Dashboard from './Dashboard';
import MenuImg from '../assets/menu.png';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

const locations = [
  {
    name: 'Pasirkaliki 179 Bandung',
    phone: '(022) 6120181',
    mobile: '081.660.5812',
  },
  {
    name: 'Banteng 32 Bandung',
    phone: '(022) 87354174',
    mobile: '081.660.5703',
  },
  {
    name: 'Golf Timur IV/20 Bandung',
    phone: '(022) 45720059',
    mobile: '0815.6073.300',
  },
  {
    name: 'Cihapit 2 Bandung',
    phone: '(022) 4266930',
    mobile: '081.5603.9090',
  },
  {
    name: 'Emong 14 Bandung',
    phone: '(022) 7320575',
    mobile: '081.660.5810',
  },
  {
    name: 'Banteng 36 Bandung',
    phone: '(022) 7300063',
    mobile: '081.660.5820',
  },
  {
    name: 'Tembaga 2 Margacinta',
    phone: '(022) 87533965',
    mobile: '081.660.5825',
  },
  {
    name: 'Sangkuriang 54 Cimahi',
    phone: '(022) 6627123',
    mobile: '0811.213.5557',
  },
  {
    name: 'MIKO MALL LT.3',
    phone: '(022) 54426284',
    mobile: '081.660.5713',
  },
  {
    name: 'Permata Buah Batu R14-16',
    phone: '',
    mobile: '081.1213.5553 / 081.660.5715',
  },
  {
    name: 'Setrasari Kulon 2',
    phone: '(022) 20282770',
    mobile: '081.5468.06060',
  },
  {
    name: 'Padalarang 103',
    phone: '(022) 52395028',
    mobile: '0815.602.0033',
  },
];

const Menu = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  const filteredLocations = selectedLocation
    ? locations.filter((loc) => loc.name.includes(selectedLocation))
    : locations;

  return (
    <Layout>
      <div className="menu-container">
        {/* KIRI */}
        <div className="menu-left">
          <img src={MenuImg} alt="Anata Menu" className="menu-image" />
        </div>

        {/* TENGAH */}
        <div className="menu-right">
          <h2 className="menu-title">DAFTAR LOKASI</h2>

          <select
            className="menu-select"
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
          >
            {locations.map((loc, i) => (
              <option key={i} value={loc.name}>
                {loc.name}
              </option>
            ))}
          </select>

          <div className="menu-locations">
            {filteredLocations.map((loc, i) => (
              <div key={i} className="location-card">
                <p>📍 {loc.name}</p>
                {loc.phone && <p>☎ {loc.phone}</p>}
                <p>📱 {loc.mobile}</p>

                {/* ✅ Button Book Now → navigasi ke BookingForm */}
                <button
                  className="book-button"
                  onClick={() => navigate('/booking')}
                >
                  Book Now
                </button>

                {/* Tombol Menu Daily */}
                <button
                  className="menu-daily-button"
                  onClick={() =>
                    window.open(
                      'https://drive.google.com/file/d/1VrdIfY-495bYhvP0MlnI5Ss3ICyHyetY/view',
                      '_blank'
                    )
                  }
                >
                  Menu Daily
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* KANAN */}
        <div className="menu-hotline">
          <h3>HOTLINE CHAT</h3>
          <button
            onClick={() =>
              window.open('https://wa.me/6281528412476', '_blank')
            }
          >
            CUSTOMER SERVICE
          </button>
          <p>Senin - Jumat 08.00 - 16.00</p>
          <p>Sabtu 09.00 - 14.00</p>

          <h3 style={{ marginTop: '24px' }}>INFORMASI LAINNYA</h3>
          <button onClick={() => navigate('/Home')}>WEBSITE</button>
          <button
            className="logout-button"
            onClick={() => navigate('/')}
            style={{ marginTop: '10px' }}
            >
            LOGOUT
            </button>
        </div>
      </div>

      <footer className="footer">
        <p>© 2013-2024, All rights reserved. Bandung - Indonesia</p>
        <p>*Konten dilindungi kebijakan "Disclaimer"</p>
      </footer>
    </Layout>
  );
};

export default Menu;
