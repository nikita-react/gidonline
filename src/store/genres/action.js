import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_ERROR } from './constant';
import api from '../../utils/api';

const genresRequest = () => ({
  type: GENRES_REQUEST,
});

const genresSuccess = (payload) => ({
  type: GENRES_SUCCESS,
  payload,
});

const genresError = () => ({
  type: GENRES_ERROR,
});

export const getGenres = () => (dispatch) => {
  dispatch(genresRequest);
  api.movies
    .getGenres()
    .then((res) => {
      dispatch(genresSuccess(res));
    })
    .catch(() => dispatch(genresError()));
};
