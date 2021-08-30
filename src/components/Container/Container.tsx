import React, { useState } from 'react';
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
import Context from '../../hooks/context';

export const Container: React.FC<{ children: object }> = ({ children }) => {
  const [filterMovies, setFilterMovies] = useState<any>([]);

  return (
    <Context.Provider value={{ filterMovies, setFilterMovies }}>
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
    </Context.Provider>
  );
};
