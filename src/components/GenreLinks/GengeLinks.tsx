import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GenreLinksWrapperStyled } from "./styled";
import GenreLink from "../GenreLink";
import { getGenres } from "../../store/genres/action";
import { useTypedSelector } from "../../hooks/useTypedSelector";

export const GenreLinks: React.FC = () => {
  const { genres } = useTypedSelector((state) => state.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    const getGenresList = () => dispatch(getGenres());
    getGenresList();
  }, [dispatch]);

  return (
    <>
      <GenreLinksWrapperStyled>
        {genres.map((genre) => (
          <GenreLink key={genre.id} name={genre.name} url={genre.url} />
        ))}
      </GenreLinksWrapperStyled>
    </>
  );
};
