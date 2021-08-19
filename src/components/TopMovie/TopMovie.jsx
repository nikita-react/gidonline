import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import { TopMovieWrapper } from './styled';
import { getMovies } from '../../store/movies/action';

export default function TopMovie() {
  const { movies } = useSelector((state) => ({
    movies: state.movie.movies,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    const getMoviesList = () => dispatch(getMovies());
    getMoviesList();
  }, [dispatch]);
  return (
    <TopMovieWrapper>
      {movies
        .sort((a, b) => b.mark - a.mark)
        .slice(0, 7)
        .map((movie) => (
          <MovieCard key={movie.id} img={movie.image} name={movie.name} />
        ))}
    </TopMovieWrapper>
  );
}
