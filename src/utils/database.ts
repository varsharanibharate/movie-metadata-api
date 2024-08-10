import * as mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'movieappuser',
  database: 'moviedb',
  password: 'movieappuser123',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  
});

export default pool;
