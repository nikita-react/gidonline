import React from 'react';
import { LinkStyled } from '../styled';
import { MovieCardWrapper, MovieImg, MovieName } from './styled';
import routes from '../../constants';

export default function MovieCard() {
  return (
    <>
      <LinkStyled to={routes.movie}>
        <MovieCardWrapper width={'132px'} height={'207px'}>
          <MovieImg
            width={'120px'}
            height={'173px'}
            src={'https://via.placeholder.com/120x173'}
          />
          <MovieName fontSize={'11px'} color={'#aaa'}>
            Name
          </MovieName>
        </MovieCardWrapper>
      </LinkStyled>
    </>
  );
}
