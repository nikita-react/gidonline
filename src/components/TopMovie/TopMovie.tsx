import React from 'react';
import MovieCard from '../MovieCard';
import { TopMovieWrapperStyled } from './styled';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const TopMovie: React.FC = () => {
  const { movies } = useTypedSelector((state) => state.movie);

  return (
    <TopMovieWrapperStyled>
      {movies
        .sort((a, b) => b.mark - a.mark)
        .slice(0, 7)
        .map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.image}
            name={movie.name}
            wrapperWidth={'132px'}
            wrapperHeight={'207px'}
            imgWidth={'120px'}
            imgHeight={'173px'}
            nameSize={'11px'}
            nameColor={'#aaa'}
          />
        ))}
    </TopMovieWrapperStyled>
  );
};
