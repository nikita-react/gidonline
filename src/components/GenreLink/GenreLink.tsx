import React from 'react';
import { LinkStyled } from '../styled';
import { GenreItem, GenreName } from './styled';
import route from '../../urls/index';

interface GenreLinkProps {
  name: string;
  url: string;
}
const GenreLink: React.FC<GenreLinkProps> = ({ name, url }) => {
  return (
    <>
      <LinkStyled to={`${route.genres.genre}${url}`}>
        <GenreItem>
          <GenreName>{name.toUpperCase()}</GenreName>
        </GenreItem>
      </LinkStyled>
    </>
  );
};
export default GenreLink;
