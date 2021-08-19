import { MOVIES_REQUEST, MOVIES_SUCCESS, MOVIES_ERROR } from './constant';
import api from '../../utils/api';

const moviesRequest = () => ({
  type: MOVIES_REQUEST,
});

const moviesSuccess = (payload) => ({
  type: MOVIES_SUCCESS,
  payload,
});

const moviesError = () => ({
  type: MOVIES_ERROR,
});

export const getMovies = () => (dispatch) => {
  dispatch(moviesRequest);
  api.movies
    .getMovies()
    .then((res) => {
      dispatch(moviesSuccess(res));
    })
    .catch(() => dispatch(moviesError()));
};
