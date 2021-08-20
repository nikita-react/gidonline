import React from 'react';
import { LinkStyled } from '../styled';
import { MovieCardWrapper, MovieImg, MovieName } from './styled';
import routes from '../../constants';

type MovieCardProps = {
  img: string;
  name: string;
};

const MovieCard = ({ img, name }: MovieCardProps) => {
  return (
    <>
      <LinkStyled to={routes.movie}>
        <MovieCardWrapper width={'132px'} height={'207px'}>
          <MovieImg width={'120px'} height={'173px'} src={img} />
          <MovieName fontSize={'11px'} color={'#aaa'}>
            {name}
          </MovieName>
        </MovieCardWrapper>
      </LinkStyled>
    </>
  );
};

export default MovieCard;
