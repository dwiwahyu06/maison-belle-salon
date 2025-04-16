const BASE_URL = 'http://localhost:3000/api/auth'; // Endpoint backend

// Menampilkan form register
function showRegister() {
  document.getElementById('register-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
}

// Menampilkan form login
function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// Fungsi untuk menangani register
async function handleRegister() {
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  const phone = document.getElementById('register-phone').value;

  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password, phone }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) {
      showLogin(); // Pindah ke halaman login kalau berhasil
    }
  } catch (error) {
    alert('Register gagal: ' + error.message);
  }
}
