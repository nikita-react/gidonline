import React from 'react';
import { LinkStyled } from '../styled';
import {
  MovieCardWrapperStyled,
  MovieImgStyled,
  MovieNameStyled,
  StarsWrapperStyled,
  StarsImgStyled,
  YearStyled,
} from './styled';
import route from '../../urls/index';
import star from '../../images/star.png';
import star_off from '../../images/star-off.png';
import star_half from '../../images/star_half.png';

interface MovieCardProps {
  img: string;
  name: string;
  wrapperWidth: string;
  wrapperHeight: string;
  imgWidth: string;
  imgHeight: string;
  nameSize: string;
  nameColor: string;
  mark?: number;
  year?: number;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const starsArr: Array<string> = [];

  if (typeof props.mark === 'number') {
    const arrMark = String(props.mark).split('.');
    const firstNumber = arrMark.shift();
    const lastNumber = Math.round(Number(`0.${arrMark.pop()}`));
    for (let i = 1; i <= Number(firstNumber); i++) {
      starsArr.push(star);
    }
    if (lastNumber === 1) {
      starsArr.push(star_half);
    }
    if (Number(firstNumber) < 9) {
      const starOffNumber = 10 - Number(firstNumber) - lastNumber;
      for (let i = 1; i <= starOffNumber; i++) {
        starsArr.push(star_off);
      }
    }
  }

  return (
    <>
      <LinkStyled to={route.basic.gidonline}>
        <MovieCardWrapperStyled
          width={props.wrapperWidth}
          height={props.wrapperHeight}
        >
          <MovieImgStyled
            width={props.imgWidth}
            height={props.imgHeight}
            src={props.img}
          />
          <MovieNameStyled fontSize={props.nameSize} color={props.nameColor}>
            {props.name}
          </MovieNameStyled>
          <StarsWrapperStyled>
            {starsArr.map((star, index) => (
              <StarsImgStyled key={index} src={star} />
            ))}
          </StarsWrapperStyled>
          <YearStyled>{props.year}</YearStyled>
        </MovieCardWrapperStyled>
      </LinkStyled>
    </>
  );
};
