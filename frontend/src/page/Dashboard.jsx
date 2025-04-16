import React from 'react';
import '../Dashboard.css'; // Import CSS-nya

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Maison Belle Salon</h1>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <h2>Pilih Akses</h2>
        <div className="button-group">
         
          <button
            onClick={() => window.location.href = '/Beranda'} // ➜ ke Beranda.jsx
            className="button-user"
          >
            User 
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        © {new Date().getFullYear()} Maison Belle Salon. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
