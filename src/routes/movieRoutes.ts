import { Router } from 'express';
import { getMovies, getMovie, updateMovieDetails } from '../controllers/movieController';

const router = Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovie);
router.put('/movies/:id', updateMovieDetails);

export default router;
