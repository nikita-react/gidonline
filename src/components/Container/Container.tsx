import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/movies/action';

import {
  ContainerWrapperStyled,
  ContainerInnerWrapperStyled,
  MainMovieWrapperStyled,
  RecommendedMovieWrapperStyled,
} from './styled';
import Header from '../Header';
import TopMovie from '../TopMovie';
import GenreLinks from '../GenreLinks';
import RegistrationLinks from '../RegistrationLinks';
import RecommendedMovies from '../RecommendedMovies';

export const Container: React.FC<{ children: object }> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMoviesList = () => dispatch(getMovies());
    getMoviesList();
  }, [dispatch]);

  return (
    <ContainerWrapperStyled>
      <Header />
      <TopMovie />
      <GenreLinks />
      <ContainerInnerWrapperStyled>
        <MainMovieWrapperStyled>{children}</MainMovieWrapperStyled>
        <RecommendedMovieWrapperStyled>
          <RegistrationLinks />
          <RecommendedMovies />
        </RecommendedMovieWrapperStyled>
      </ContainerInnerWrapperStyled>
    </ContainerWrapperStyled>
  );
};
