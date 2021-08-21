import styled from 'styled-components';

// interface MovieCardStyled {
//   width: string;
//   height: string;
//   color: string;
//   fontSize: string;
// }

export const MovieCardWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: inline-block;
  margin: 2px;
  background-color: #222;
  text-align: center;
`;
export const MovieImg = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 6px 6px 3px 6px;
`;
export const MovieName = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;
