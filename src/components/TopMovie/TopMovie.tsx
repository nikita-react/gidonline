import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../MovieCard';
import { TopMovieWrapper } from './styled';
import { getMovies } from '../../store/movies/action';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const TopMovie: React.FC = () => {
  const { movies } = useTypedSelector((state) => state.movie);
  console.log(movies);

  const dispatch = useDispatch();

  useEffect(() => {
    const getMoviesList = () => dispatch(getMovies());
    getMoviesList();
  }, [dispatch]);

  return (
    <TopMovieWrapper>
      {/* {movies
        .sort((a: object, b: object) => b.mark - a.mark)
        .slice(0, 7)
        .map((movie: object) => (
          <MovieCard key={movie.id} img={movie.image} name={movie.name} />
        ))} */}
    </TopMovieWrapper>
  );
};

export default TopMovie;
