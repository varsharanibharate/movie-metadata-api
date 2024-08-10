import pool from '../utils/database';
import { Movie } from '../models/movieModel';

export const listMovies = async (page: number, limit: number, genre?: string, title?: string) => {
  const offset = (page - 1) * limit;
  let query = 'SELECT * FROM movies';
  const params: any[] = [];

  if (genre || title) {
    query += ' WHERE';
    if (genre) {
      query += ' genre = ?';
      params.push(genre);
    }
    if (title) {
      if (params.length > 0) query += ' AND';
      query += ' title LIKE ?';
      params.push(`%${title}%`);
    }
  }

  query += ' LIMIT ? OFFSET ?';
  params.push(limit, offset);

  const [rows] = await pool.query(query, params);
  return rows as Movie[];
};

export const getMovieById = async (id: number) => {
  const [rows] = await pool.query('SELECT * FROM movies WHERE id = ?', [id]);
  return (rows as Movie[])[0];
};

export const updateMovie = async (id: number, movie: Partial<Movie>) => {
  const keys = Object.keys(movie) as (keyof Movie)[];
  const setClause = keys.map((key, idx) => `${key} = ?`).join(', ');
  const params = [...keys.map(key => movie[key]), id];
  
  const [result] = await pool.query(`UPDATE movies SET ${setClause} WHERE id = ?`, params);
  return result;
};
