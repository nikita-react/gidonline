import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_ERROR } from './constant';

export interface GenrePayload {
  id: number;
  name: string;
  url: string;
}

interface GenreRequest {
  type: typeof GENRES_REQUEST;
  payload?: Array<GenrePayload>;
}

interface GenreSuccess {
  type: typeof GENRES_SUCCESS;
  payload: Array<GenrePayload>;
}
interface GenreError {
  type: typeof GENRES_ERROR;
  payload?: Array<GenrePayload>;
}

export type GenreActionTypes = GenreRequest | GenreSuccess | GenreError;
