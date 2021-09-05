import styled from "styled-components";

export const RecommendedWrapperStyled = styled.div`
  background-color: #222;
  margin: 5px 2px 0 2px;
  padding: 10px 0px 0px 7px;
  font-size: 12px;
  color: #aaa;
  height: 100vh;
`;
export const MovieWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
export const TitleStyled = styled.p`
  font-size: 15px;
  color: #aaa;
  margin: 2px 0 13px 7px;
  cursor: default;
  display: flex;
  align-items: center;
  ::after {
    content: "";
    background-image: url(${({ arrow }) => arrow});
    width: 10px;
    height: 11px;
    display: inline-block;
    background-repeat: no-repeat;
    margin-left: 3px;
  }
`;
