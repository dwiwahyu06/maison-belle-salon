import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'maison-belle-salon',
  password: 'yogadwi2206', // ganti sesuai database kamu
  port: 5432,
});

export default pool;
