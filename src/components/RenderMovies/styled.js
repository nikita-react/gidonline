import styled from 'styled-components';

export const RenderMoviesWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 4px;
`;
export const RenderPageLinksWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0 25px 6px;
`;
export const PageLink = styled.div`
  color: #ccc;
  background-color: #333;
  padding: 6px;
  margin: 2px;
  transition: all 0.2s;
  :hover {
    background-color: #454545;
    color: #fff;
  }
`;
