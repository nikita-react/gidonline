import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from './constant';

export interface Payload {
  id: number;
  name: string;
  year: number;
  country: string[];
  genre: string[];
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

export type MovieActionTypes = MovieRequest | MovieSuccess | MovieError;
