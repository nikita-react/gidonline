import React from 'react';
import {
  FilterMoviesWrapperStyled,
  FilterItemStyled,
  SelectWrapperStyled,
  SelectStyled,
  OptionStyled,
  FilterBestMoviesWrapperStyled,
  BestMoviesImgStyled,
} from './styled';
import star from '../../images/star.png';
import line from '../../images/line.png';

export const FilterMovies: React.FC<{}> = () => {
  return (
    <>
      <FilterMoviesWrapperStyled>
        <SelectWrapperStyled>
          <FilterItemStyled>актеры</FilterItemStyled>
          <SelectStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
          </SelectStyled>
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterItemStyled>режиссер</FilterItemStyled>
          <SelectStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
          </SelectStyled>
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterItemStyled>страна</FilterItemStyled>
          <SelectStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
          </SelectStyled>
        </SelectWrapperStyled>
        <SelectWrapperStyled>
          <FilterItemStyled>год</FilterItemStyled>
          <SelectStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
            <OptionStyled>актер</OptionStyled>
          </SelectStyled>
        </SelectWrapperStyled>
      </FilterMoviesWrapperStyled>
      <FilterBestMoviesWrapperStyled>
        <BestMoviesImgStyled width={`17px`} height={`17px`} src={star} />
        <FilterItemStyled>
          <BestMoviesImgStyled
            padRight={`5px`}
            marBottom={`3px`}
            width={`109px`}
            height={`1px`}
            src={line}
          />
          новое на сайте
        </FilterItemStyled>
      </FilterBestMoviesWrapperStyled>
    </>
  );
};
