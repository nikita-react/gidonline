import React from 'react';
import { RenderMoviesWrapperStyled } from './styled';
import MovieCard from '../MovieCard';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const RenderMovies: React.FC<{}> = () => {
  const { movies } = useTypedSelector((state) => state.movie);

  return (
    <RenderMoviesWrapperStyled>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          img={movie.image}
          name={movie.name}
          wrapperWidth={'210px'}
          wrapperHeight={'350px'}
          imgWidth={'200px'}
          imgHeight={'300px'}
          nameSize={'13px'}
          nameColor={'#bbb'}
        />
      ))}
    </RenderMoviesWrapperStyled>
  );
};
