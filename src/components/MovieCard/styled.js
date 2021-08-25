import styled from 'styled-components';

export const MovieCardWrapperStyled = styled.div`
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
export const MovieImgStyled = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 6px 6px 3px 6px;
`;
export const MovieNameStyled = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
`;
