import React, { useEffect, useContext } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MovieCard from '../MovieCard';
import routes from '../../urls';
import {
  RenderMoviesWrapperStyled,
  RenderPageLinksWrapperStyled,
  PageLink,
} from './styled';
import { LinkStyled } from '../styled';
import Context from '../../hooks/context';

export const RenderMovies: React.FC<{
  setCurrentPag: any;
  currentPage: string;
}> = ({ setCurrentPag, currentPage }) => {
  const { movies } = useTypedSelector((state) => state.movie);
  const { filterMovies, setFilterMovies } = useContext(Context);

  useEffect(() => {
    setFilterMovies(movies);
  }, [movies, setFilterMovies]);

  let pageNumber = Number(currentPage);

  if (isNaN(pageNumber) || window.location.pathname === '/') {
    pageNumber = 1;
  }
  const moviesPerPage: number = 6;
  const lastMoviesIndex: number = pageNumber * moviesPerPage;
  const firstMoviesIndex: number = lastMoviesIndex - moviesPerPage;
  const currentMovies: Array<any> = filterMovies.slice(
    firstMoviesIndex,
    lastMoviesIndex
  );

  const numberOfPages: number = Math.ceil(movies.length / moviesPerPage);
  const pageNumbers: Array<number> = Array.from(
    { length: numberOfPages },
    (v, k) => k + 1
  );

  const paginate = (number: number) => {
    setCurrentPag(number);
  };

  return (
    <>
      <RenderMoviesWrapperStyled>
        {currentMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.image}
            name={movie.name}
            mark={movie.mark}
            year={movie.year}
            wrapperWidth={'210px'}
            wrapperHeight={'357px'}
            imgWidth={'200px'}
            imgHeight={'300px'}
            nameSize={'13px'}
            nameColor={'#bbb'}
          />
        ))}
      </RenderMoviesWrapperStyled>
      <RenderPageLinksWrapperStyled>
        {pageNumbers.map((number) => (
          <LinkStyled to={`${routes.basic.pagination}${number}`} key={number}>
            <PageLink onClick={() => paginate(number)}>{number}</PageLink>
          </LinkStyled>
        ))}
        <LinkStyled to={`${routes.basic.pagination}${pageNumber + 1}`}>
          <PageLink onClick={() => paginate(pageNumber + 1)}>
            Следующая
          </PageLink>
        </LinkStyled>
      </RenderPageLinksWrapperStyled>
    </>
  );
};
