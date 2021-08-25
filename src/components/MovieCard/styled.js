import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: inline-block;
  margin: 2px;
  background-color: #222;
  text-align: center;
  transition: 0.2s;
  :hover {
    background-color: #353535;
    color: #ddd;
  }
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
