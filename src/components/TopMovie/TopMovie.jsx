import React from 'react';
import MovieCard from '../MovieCard';
import { TopMovieWrapper } from './styled';
export default function TopMovie() {
  return (
    <TopMovieWrapper>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </TopMovieWrapper>
  );
}
