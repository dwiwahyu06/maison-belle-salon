import React, { useEffect } from "react";
import Layout from "../components/Layout";
import jadwal from "../assets/jadwal.jpg";
import pijat from "../assets/pijat.jpg";
import promo from "../assets/promo.jpg";
import promo1 from "../assets/promo1.jpg";
import totok from "../assets/totok.jpg";
import totok2 from "../assets/totok2.jpg";
import "../styles.css";

const InfoAndPromo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div className="info-promo-container">

        {/* Tambahkan Gambar di sini */}
        <div className="image-gallery">
          <img src={jadwal} alt="Jadwal" />
          <img src={pijat} alt="Pijat" />
          <img src={promo} alt="Promo" />
          <img src={promo1} alt="Promo 1" />
          <img src={totok} alt="Totok" />
          <img src={totok2} alt="Totok 2" />
        </div>

        <div className="location-list">
          <p>📍 Pasirkaliki 179 Bandung – ☎ (022) 6120181 – 📱 081.660.5812</p>
          <p>📍 Banteng 32 Bandung – ☎ (022) 87354174 – 📱 081.660.5703</p>
          <p>📍 Golf Timur IV/20 Bandung – ☎ (022) 45720059 – 📱 0815.6073.300</p>
          <p>📍 Cihapit 2 Bandung – ☎ (022) 4266930 – 📱 081.5603.9090</p>
          <p>📍 Emong 14 Bandung – ☎ (022) 7320575 – 📱 081.660.5810</p>
          <p>📍 Banteng 36 Bandung – ☎ (022) 7300063 – 📱 081.660.5820</p>
          <p>📍 Tembaga 2 Margacinta – ☎ (022) 87533965 – 📱 081.660.5825</p>
          <p>📍 Sangkuriang 54 Cimahi – ☎ (022) 6627123 – 📱 0811.213.5557</p>
          <p>📍 MIKO MALL LT.3 – ☎ (022) 54426284 – 📱 081.660.5713</p>
          <p>📍 Permata Buah Batu R14-16 – 📱 081.1213.5553 – 📱 081.660.5715</p>
          <p>📍 Setrasari Kulon 2 – ☎ (022) 20282770 – 📱 081.5468.06060</p>
          <p>📍 Padalarang 103 – ☎ (022) 52395028 – 📱 0815.602.0033</p>
        </div>



        <footer className="footer">
          <p>© 2013-2024, All rights reserved. Bandung - Indonesia</p>
          <p>*Konten dilindungi kebijakan "Disclaimer"</p>
        </footer>

        <button className="scroll-top-btn" onClick={handleScrollTop} title="Kembali ke atas">
          ↑
        </button>
      </div>
    </Layout>
  );
};

export default InfoAndPromo;
