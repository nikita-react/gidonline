import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from './constant';

const reducerState = {
  movies: [],
};

const movieReducer = (state = reducerState, action) => {
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
