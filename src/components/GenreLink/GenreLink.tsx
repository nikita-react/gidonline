import React from 'react';
import { LinkStyled } from '../styled';
import { GenreItemStyled, GenreNameStyled } from './styled';
import route from '../../urls/index';

interface GenreLinkProps {
  name: string;
  url: string;
}
export const GenreLink: React.FC<GenreLinkProps> = ({ name, url }) => {
  return (
    <>
      <LinkStyled to={`${route.genres.genre}${url}`}>
        <GenreItemStyled>
          <GenreNameStyled>{name.toUpperCase()}</GenreNameStyled>
        </GenreItemStyled>
      </LinkStyled>
    </>
  );
};
