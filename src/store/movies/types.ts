import {
  MOVIES_REQUEST,
  MOVIES_SUCCESS,
  MOVIES_ERROR,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
} from "./constant";

export interface Payload {
  id: number;
  name: string;
  year: number;
  country: string[];
  genre: string[];
  urls: string[];
  time: string;
  viewing: string[];
  director: string[];
  cast: string[];
  image: string;
  description: string;
  mark: number;
}

interface MovieRequest {
  type: typeof MOVIES_REQUEST;
  payload?: Payload[];
}
interface MovieSuccess {
  type: typeof MOVIES_SUCCESS;
  payload: Payload[];
}
interface MovieError {
  type: typeof MOVIES_ERROR;
  payload?: Payload[];
}

interface OneMovieRequest {
  type: typeof MOVIE_REQUEST;
  payload?: Payload;
}
interface OneMovieSuccess {
  type: typeof MOVIE_SUCCESS;
  payload: Payload;
}
interface OneMovieError {
  type: typeof MOVIE_ERROR;
  payload?: Payload;
}

export type MovieActionTypes = MovieRequest | MovieSuccess | MovieError;
export type OneMovieActionTypes =
  | OneMovieRequest
  | OneMovieSuccess
  | OneMovieError;
