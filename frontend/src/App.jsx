import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './page/Beranda';
import Home from './page/Home';
import Dashboard from './page/Dashboard';
import InfoAndPromo from './page/infoandpromo';
import Menu from './page/Menu';
import BookingForm from './page/BookingForm'; 
import Register from './page/Regis';
import Riwayat from './page/Riwayat';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HomeHero" element={<HomeHero />} />
        <Route path="/Riwayat" element={<Riwayat />} />  
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/infoandpromo" element={<InfoAndPromo />} />
        <Route path="*" element={<h1>404 - Halaman tidak ditemukan</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
