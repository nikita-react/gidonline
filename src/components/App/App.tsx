import React from 'react';
import { AppWrapper } from './styled';

const App: React.FC<{ children: object }> = ({ children }) => {
  return <AppWrapper>{children}</AppWrapper>;
};

export default App;
