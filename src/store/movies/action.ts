import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from './constant';
import { MovieActionTypes, Payload } from './types';
import api from '../../utils/api';

const moviesRequest = (): MovieActionTypes => ({
  type: MOVIES_REQUEST,
});

const moviesSuccess = (payload: Payload[]): MovieActionTypes => ({
  type: MOVIES_SUCCESS,
  payload: payload,
});

const moviesError = (): MovieActionTypes => ({
  type: MOVIES_ERROR,
});

export const getMovies = () => (dispatch: any) => {
  dispatch(moviesRequest);
  api.movies
    .getMovies()
    .then((res) => {
      dispatch(moviesSuccess(res));
    })
    .catch(() => dispatch(moviesError()));
};
