import React from 'react';
import { LinkStyled } from '../styled';
import { MovieCardWrapper, MovieImg, MovieName } from './styled';
import routes from '../../constants';

export default function MovieCard() {
  return (
    <>
      <LinkStyled to={routes.movie}>
        <MovieCardWrapper>
          <MovieImg src={'https://via.placeholder.com/468x60'} />
          <MovieName />
        </MovieCardWrapper>
      </LinkStyled>
    </>
  );
}
