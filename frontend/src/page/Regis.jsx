// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';

// function Regis() {
//   const [form, setForm] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false); // 👁️ kontrol visibilitas password
//   const navigate = useNavigate();

//   // Cek apakah ada data yang disimpan di localStorage saat komponen pertama kali dirender
//   useEffect(() => {
//     const storedForm = JSON.parse(localStorage.getItem('regisForm'));
//     if (storedForm) {
//       setForm(storedForm);
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Batasi password maksimal 12 karakter
//     if (name === 'password' && value.length > 12) return;

//     const updatedForm = { ...form, [name]: value };
//     setForm(updatedForm);

//     // Simpan form ke localStorage setiap ada perubahan
//     localStorage.setItem('regisForm', JSON.stringify(updatedForm));
//   };

//   const validate = () => {
//     const newErrors = {};

//     // Validasi username: huruf di depan, angka boleh setelah karakter ke-3
//     if (!/^[A-Za-z]{3,}[A-Za-z0-9]*$/.test(form.username)) {
//       newErrors.username = 'Username harus huruf dulu, angka boleh setelah 3 huruf pertama.';
//     }

//     // Validasi email: harus pakai @gmail.com
//     if (!/^[\w.+-]+@gmail\.com$/.test(form.email)) {
//       newErrors.email = 'Email harus berakhir dengan @gmail.com';
//     }

//     // Validasi phone: harus angka
//     if (!/^\d+$/.test(form.phone)) {
//       newErrors.phone = 'Nomor telepon hanya boleh angka.';
//     }

//     // Validasi password
//     if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+.,])[A-Za-z\d!@#$%^&*()_+,.]{1,12}$/.test(form.password)) {
//       newErrors.password =
//         'Password harus diawali huruf besar, maksimal 12 karakter, angka, simbol.';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegister = async () => {
//     if (!validate()) return;

//     try {
//       const res = await api.post('/auth/register', form);
//       alert(res.data.message);
//       navigate('/login');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Terjadi kesalahan saat registrasi');
//     }
//   };

//   return (
//     <div className="form">
//       <h2>Register</h2>

//       <input name="username" placeholder="Username" value={form.username} onChange={handleChange} />
//       {errors.username && <p className="error">{errors.username}</p>}

//       <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
//       {errors.email && <p className="error">{errors.email}</p>}

//       <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
//       {errors.phone && <p className="error">{errors.phone}</p>}

//       <div style={{ position: 'relative' }}>
//         <input
//           name="password"
//           placeholder="Password"
//           type={showPassword ? 'text' : 'password'}
//           value={form.password}
//           onChange={handleChange}
//           maxLength={12}
//         />
//         {/* Ikon mata 👁️ */}
//         <span
//           style={{
//             position: 'absolute',
//             right: '10px',
//             top: '30%',
//             cursor: 'pointer',
//             userSelect: 'none'
//           }}
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? '🙈' : '👁️'}
//         </span>
//       </div>
//       {errors.password && <p className="error">{errors.password}</p>}

//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// }

// export default Regis;



import { useState } from 'react';
import { register } from '../api/api';
import '../styles.css';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await register(form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error saat register');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
      <p>{message}</p>
    </form>
  );
}
