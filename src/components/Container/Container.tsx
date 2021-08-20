import React from 'react';
import { ContainerWrapper } from './styled';
import Header from '../Header';
import TopMovie from '../TopMovie';

const Container: React.FC = () => {
  return (
    <ContainerWrapper>
      <Header />
      <TopMovie />
    </ContainerWrapper>
  );
};
export default Container;
