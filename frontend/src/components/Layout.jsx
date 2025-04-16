// src/components/Layout.jsx
import React from 'react';
import { Link } from "react-router-dom";
import Rambut from '../page/Rambut';
import Wajah from '../page/Wajah';
import Tubuh from '../page/Tubuh';
import '../Dropdown.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className="anata-header">
        <div className="top-bar">
          <span>#BecauseManisonBelleCare #MaisonBelleNewNormal</span>
          <div className="contact-info">
            <span>📧 info@maisonbelleSalon.com</span>
          </div>
        </div>

        <div className="nav-container">
          <div className="logo">Maison Belle</div>
          <nav>
            <ul className="menu-bar">
              <li><Link to="/Home">HOME</Link></li>
              <li>
                <a href="#">RAMBUT</a>
                <Rambut />
              </li>
              <li>
                <a href="#">WAJAH</a>
                <Wajah />
              </li>
              <li>
                <a href="#">TUBUH</a>
                <Tubuh />
              </li>
              <li><Link to="/infoandpromo">INFO & PROMO</Link></li>
              <li><Link to="/Menu">MENU HARGA & KONTAK</Link></li>
              <li><Link to="/Riwayat">RIWAYAT</Link></li>
            </ul>
          </nav>
        </div>
      </header>


      {/* Konten halaman */}
      {children}
    </>
  );
};

export default Layout;
