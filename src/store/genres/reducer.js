import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_ERROR } from './constant';

const reducerState = {
  genres: [],
};

const genreReducer = (state = reducerState, action) => {
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
