import React, { useEffect } from "react";
import { AppWrapperStyled } from "./styled";
import { useDispatch } from "react-redux";
import { getMovies } from "../../store/movies/action";

export const App: React.FC<{ children: object }> = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMoviesList = () => dispatch(getMovies());
    getMoviesList();
  }, [dispatch]);
  //new chabges
  return <AppWrapperStyled>{children}</AppWrapperStyled>;
};
