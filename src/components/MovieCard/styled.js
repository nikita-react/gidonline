import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  margin: 2px;
  background-color: #222;
  text-align: center;
`;
export const MovieImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 6px 6px 3px 6px;
`;
export const MovieName = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
`;
