import {
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
  MOVIES_ERROR,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
} from "./constant";
import { MovieActionTypes, Payload, OneMovieActionTypes } from "./types";

interface MovieState {
  movies: Payload[];
}
interface OneMovieState {
  oneMovies: Payload[];
}
const reducerState: MovieState = {
  movies: [],
};
const oneReducerState: OneMovieState = {
  oneMovies: [],
};

export const movieReducer = (
  state = reducerState,
  action: MovieActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_REQUEST:
      return {
        ...state,
      };
    case MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
      };
    case MOVIES_ERROR:
    default:
      return {
        ...state,
      };
  }
};
export const oneMovieReducer = (
  state = oneReducerState,
  action: OneMovieActionTypes
) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_REQUEST:
      return {
        ...state,
      };
    case MOVIE_SUCCESS:
      return {
        ...state,
        oneMovies: payload,
      };
    case MOVIE_ERROR:
    default:
      return {
        ...state,
      };
  }
};
