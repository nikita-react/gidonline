import React from 'react';
import { ContainerWrapper } from './styled';
import Header from '../Header';
import TopMovie from '../TopMovie';
export default function Container() {
  return (
    <ContainerWrapper>
      <Header />
      <TopMovie />
    </ContainerWrapper>
  );
}
