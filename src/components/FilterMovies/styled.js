import styled from 'styled-components';

export const FilterMoviesWrapperStyled = styled.div`
  height: 20px;
  max-width: 644px;
  background-color: #191919;
  color: #999;
  margin: 2px 2px 4px 6px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
`;

export const SelectWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  :hover {
    color: #ccc;
  }
`;
export const SelectStyled = styled.select`
  position: absolute;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`;
export const OptionStyled = styled.option``;
export const FilterItemStyled = styled.span``;

export const FilterBestMoviesWrapperStyled = styled.div`
  max-width: 650px;
  height: 22px;
  background-color: #181818;
  margin: 0px 0px 4px 6px;
  font-size: 11px;
  color: #777;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`;
export const BestMoviesImgStyled = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-right: ${({ padRight }) => padRight};
  margin-bottom: ${({ marBottom }) => marBottom};
`;
