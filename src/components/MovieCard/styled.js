import styled from "styled-components";

export const MovieCardWrapperStyled = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: inline-block;
  margin: ${({ margin }) => (margin ? margin : "2px")};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#222"};
  text-align: center;
  transition: 0.2s;
  position: relative;
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

export const StarsWrapperStyled = styled.div`
  margin: 2px 2px 4px 6px;
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const StarsImgStyled = styled.img`
  width: 15px;
  height: 15px;
`;

export const YearStyled = styled.span`
  font-weight: bold;
  font-size: 15px;
  font-style: italic;
  color: #bf090e;
  margin-right: 6px;
  margin-bottom: 4px;
  position: absolute;
  right: 0;
  bottom: 0;
`;
