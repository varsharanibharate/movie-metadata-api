import { Request, Response } from 'express';
import { listMovies, getMovieById, updateMovie } from '../services/movieService';

export const getMovies = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const genre = req.query.genre as string;
  const title = req.query.title as string;

  try {
    const movies = await listMovies(page, limit, genre, title);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovie = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const movie = await getMovieById(id);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMovieDetails = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const movieUpdates = req.body;
  try {
    const updatedMovie = await updateMovie(id, movieUpdates);
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
