import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api/auth',
  withCredentials: true, // penting agar cookie terkirim
});

export const register = (data) => API.post('/register', data);
export const login = (data) => API.post('/login', data);
export const getUser = () => axios.get('http://localhost:3000/api/auth/me', { withCredentials: true });
