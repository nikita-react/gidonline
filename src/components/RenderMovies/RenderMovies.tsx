import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MovieCard from '../MovieCard';
import routes from '../../urls';
import {
  RenderMoviesWrapperStyled,
  RenderPageLinksWrapperStyled,
  PageLink,
} from './styled';
import { LinkStyled } from '../styled';

export const RenderMovies: React.FC<{
  setCurrentPag: any;
  currentPage: string;
}> = ({ setCurrentPag, currentPage }) => {
  const { movies } = useTypedSelector((state) => state.movie);

  let pageNumber = Number(currentPage);

  if (isNaN(pageNumber) || window.location.pathname === '/') {
    pageNumber = 1;
  }
  const moviesPerPage: number = 3;
  const lastMoviesIndex: number = pageNumber * moviesPerPage;
  const firstMoviesIndex: number = lastMoviesIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMoviesIndex, lastMoviesIndex);

  const pageNumbers: Array<number> = [];
  for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

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
            wrapperWidth={'210px'}
            wrapperHeight={'350px'}
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
