import React, { useContext } from 'react';
import { LinkStyled } from '../styled';
import { GenreItemStyled, GenreNameStyled } from './styled';
import route from '../../urls/index';
import Context from '../../hooks/context';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface GenreLinkProps {
  name: string;
  url: string;
}
export const GenreLink: React.FC<GenreLinkProps> = ({ name, url }) => {
  const { setFilterMovies } = useContext(Context);
  const { movies } = useTypedSelector((state) => state.movie);

  const genreFilter = (e: any) => {
    e.preventDefault();
    const filterMovies: Array<object> = [];
    movies.forEach((movie) =>
      movie.genre.forEach((genre) => {
        if (genre.toLowerCase() === name) {
          filterMovies.push(movie);
        }
      })
    );

    setFilterMovies(filterMovies);
  };

  return (
    <>
      <LinkStyled
        onClick={(e: any) => genreFilter(e)}
        to={`${route.genres.genre}`}
      >
        <GenreItemStyled>
          <GenreNameStyled>{name.toUpperCase()}</GenreNameStyled>
        </GenreItemStyled>
      </LinkStyled>
    </>
  );
};
