import React from 'react';
import { LinkStyled } from '../styled';
import {
  MovieCardWrapperStyled,
  MovieImgStyled,
  MovieNameStyled,
} from './styled';
import route from '../../urls/index';
interface MovieCardProps {
  img: string;
  name: string;
  wrapperWidth: string;
  wrapperHeight: string;
  imgWidth: string;
  imgHeight: string;
  nameSize: string;
  nameColor: string;
}

export const MovieCard: React.FC<MovieCardProps> = (props) => {
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
        </MovieCardWrapperStyled>
      </LinkStyled>
    </>
  );
};
