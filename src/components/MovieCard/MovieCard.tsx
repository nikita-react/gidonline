import React from "react";
import { LinkStyled } from "../styled";
import {
  MovieCardWrapperStyled,
  MovieImgStyled,
  MovieNameStyled,
  StarsWrapperStyled,
  StarsImgStyled,
  YearStyled,
} from "./styled";
import route from "../../urls/index";
import star from "../../images/star.png";
import star_off from "../../images/star-off.png";
import star_half from "../../images/star_half.png";

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
  backgroundColor?: string;
  margin?: string;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
  const starsArr: Array<string> = [];

  if (typeof props.mark === "number") {
    const arrMark = String(props.mark).split(".");
    const firstNumber = arrMark.shift();
    const lastNumber = Math.round(Number(`0.${arrMark.pop()}`));
    for (let i = 1; i <= Number(firstNumber); i++) {
      starsArr.push(star);
    }
    if (lastNumber === 1) {
      starsArr.push(star_half);
    }
    if (starsArr.length < 10) {
      const starOffNumber = 10 - starsArr.length;
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
          backgroundColor={props.backgroundColor}
          margin={props.margin}
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
