import React from 'react';
import { ContainerWrapper } from './styled';
import Header from '../Header';
import TopMovie from '../TopMovie';
import GenreLinks from '../GenreLinks';

const Container: React.FC = () => {
  return (
    <ContainerWrapper>
      <Header />
      <TopMovie />
      <GenreLinks />
    </ContainerWrapper>
  );
};
export default Container;
