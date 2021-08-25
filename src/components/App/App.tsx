import React from 'react';
import { AppWrapperStyled } from './styled';

export const App: React.FC<{ children: object }> = ({ children }) => {
  return <AppWrapperStyled>{children}</AppWrapperStyled>;
};
