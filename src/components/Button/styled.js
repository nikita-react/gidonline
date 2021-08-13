import styled from 'styled-components';

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #fff;
  opacity: 0.5;
  border: none;
  outline: none;
  font-size: ${(props) => props.fontSize};
  transition: opacity 0.3s;
  background-color: ${(props) => props.backgroundColor};
  :hover {
    opacity: 0.8;
    color: #ddd;
  }
`;
export default Button;
