import React from "react";
import {
  RecommendedWrapperStyled,
  TitleStyled,
  MovieWrapperStyled,
} from "./styled";
import arrow from "../../images/arr-r.png";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MovieCard from "../MovieCard";

export const RecommendedMovies: React.FC<{}> = () => {
  const { movies } = useTypedSelector((state) => state.movie);

  return (
    <RecommendedWrapperStyled>
      <TitleStyled arrow={arrow}>Рекомендуемые фильмы</TitleStyled>
      <MovieWrapperStyled>
        {movies.slice(0, 6).map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.image}
            name={movie.name}
            wrapperWidth={"127px"}
            wrapperHeight={"203px"}
            imgWidth={"113px"}
            imgHeight={"165px"}
            nameSize={"11px"}
            nameColor={"#aaa"}
            backgroundColor={"#292929"}
            margin={"3px"}
          />
        ))}
      </MovieWrapperStyled>
    </RecommendedWrapperStyled>
  );
};
