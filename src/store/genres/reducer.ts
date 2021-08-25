import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_ERROR } from './constant';
import { GenreActionTypes, GenrePayload } from './types';

interface GenreState {
  genres: Array<GenrePayload>;
}
const reducerState: GenreState = {
  genres: [],
};

const genreReducer = (state = reducerState, action: GenreActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case GENRES_REQUEST:
      return {
        ...state,
      };
    case GENRES_SUCCESS:
      return {
        ...state,
        genres: payload,
      };
    case GENRES_ERROR:
    default:
      return {
        ...state,
      };
  }
};

export default genreReducer;
