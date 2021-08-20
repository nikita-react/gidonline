import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from './constant';
import { MovieActionTypes, Payload } from './types';

interface MovieState {
  movies: Payload[];
}

const reducerState: MovieState = {
  movies: [],
};

const movieReducer = (state = reducerState, action: MovieActionTypes) => {
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

export default movieReducer;
