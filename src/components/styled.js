import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: #fff;
  opacity: 0.5;
  border: none;
  outline: none;
  font-size: ${({ fontSize }) => fontSize};
  transition: opacity 0.3s;
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
  :hover {
    opacity: 0.8;
    color: #ddd;
  }
`;

export const LinkStyled = styled(Link)``;
