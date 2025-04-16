import React from 'react';
import '../styles.css'; // Opsional untuk styling tambahan

const HomeHero = () => {
  return (
    <section className="home-hero">
      <img
        src="https://i.pinimg.com/736x/6b/fd/f2/6bfdf256af90c49de08f52e8a4b60010.jpg"
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1>Selamat Datang di Salon Kami</h1>
        <p>Rasakan kenyamanan dan pelayanan terbaik</p>
      </div>
    </section>
    
  );
};

export default HomeHero;
