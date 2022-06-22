import {
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
  MOVIES_ERROR,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
} from "./constant";
import { MovieActionTypes, Payload, OneMovieActionTypes } from "./types";
import api from "../../utils/api";

const moviesRequest = (): MovieActionTypes => ({
  type: MOVIES_REQUEST,
});
const oneMovieRequest = (): OneMovieActionTypes => ({
  type: MOVIE_REQUEST,
});
const moviesSuccess = (payload: Payload[]): MovieActionTypes => ({
  type: MOVIES_SUCCESS,
  payload: payload,
});
const oneMovieSuccess = (payload: Payload): OneMovieActionTypes => ({
  type: MOVIE_SUCCESS,
  payload: payload,
});
const moviesError = (): MovieActionTypes => ({
  type: MOVIES_ERROR,
});
const oneMovieError = (): OneMovieActionTypes => ({
  type: MOVIE_ERROR,
});
export const getMovies = () => (dispatch: any) => {
  dispatch(moviesRequest);
  api.movies
    .getMovies()
    .then((res: Payload[]) => {
      dispatch(moviesSuccess(res));
    })
    .catch(() => dispatch(moviesError()));
};
export const getOneMovie = (id: any) => (dispatch: any) => {
  dispatch(oneMovieRequest);
  api.movies
    .getOneMovies(id)
    .then((res: Payload) => {
      dispatch(oneMovieSuccess(res));
    })
    .catch(() => dispatch(oneMovieError()));
};
