import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapperStyled = styled.div`
  height: 100px;
  padding: 0 100px 0 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderImgStyled = styled.img``;
export const HeaderLinkStyled = styled(Link)`
  display: inline-block;
  padding: 0px 3px;
  color: #aaa;
  :hover {
    color: #ccc;
  }
  ::after {
    content: '|';
    opacity: 0.4;
    padding-left: 3px;
  }
  :last-child::after {
    display: none;
  }
`;
export const HeaderSearchWrapperStyled = styled.div``;
export const HeaderSearchStyled = styled.input`
  outline: none;
  background-color: #080808;
  color: #ddd;
  border: 2px solid #333;
  border-right: 1px solid #333;
  height: 25px;
  width: 330px;
  opacity: 0.5;
  font-size: 12px;
  padding-left: 7px;
  margin-right: 2px;
  transition: all 0.3s;
  ::placeholder {
    color: #ddd;
  }

  :hover {
    border: 2px solid #484848;
    border-right: 1px solid #484848;
    color: #888;
    ::placeholder {
      color: #888;
    }
  }
`;
export const HeaderLinksWrapperStyled = styled.div`
  padding: 5px 0 0 10px;
`;
