import { useState } from 'react';
import Register from './Regis';
import Login from './login';
import '../Beranda.css';

export default function Beranda() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      <header className="header">
        <h1>Maison Belle Salon</h1>
        <p>Selamat datang di website Kecantikan </p>
      </header>

      <main className="container">
        {!showRegister && !showLogin && (
          <div className="menu-pilihan">
            <h2>Silakan pilih aksi</h2>
            <button onClick={() => setShowRegister(true)}>Register</button>
            <button onClick={() => setShowLogin(true)}>Login</button>
          </div>
        )}

        {showRegister && (
          <div className="form">
            <Register />
            <button onClick={() => setShowRegister(false)}>Kembali</button>
          </div>
        )}

        {showLogin && (
          <div className="form">
            <Login />
            <button onClick={() => setShowLogin(false)}>Kembali</button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Maison Belle Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}