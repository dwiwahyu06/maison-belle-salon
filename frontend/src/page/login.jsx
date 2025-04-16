import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import '../styles.css';

export default function Login() {
  const [form, setForm] = useState({
    identifier: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // 🔁 Hook untuk navigasi

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(form);
      setMessage(res.data.message);
      // ✅ Arahkan ke halaman Home jika login berhasil
      if (res.data.message.toLowerCase().includes("berhasil")) {
        navigate('/home');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login gagal');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-login">
      <h2>Login</h2>
      <input
        name="identifier"
        placeholder="Email / Username / Phone"
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}
