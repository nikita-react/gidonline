import { GENRES_REQUEST, GENRES_SUCCESS, GENRES_ERROR } from './constant';
import api from '../../utils/api';
import { GenreActionTypes, GenrePayload } from './types';

const genresRequest = (): GenreActionTypes => ({
  type: GENRES_REQUEST,
});

const genresSuccess = (payload: Array<GenrePayload>): GenreActionTypes => ({
  type: GENRES_SUCCESS,
  payload: payload,
});

const genresError = (): GenreActionTypes => ({
  type: GENRES_ERROR,
});

export const getGenres = () => (dispatch: any) => {
  dispatch(genresRequest);
  api.genres
    .getGenres()
    .then((res: Array<GenrePayload>) => {
      dispatch(genresSuccess(res));
    })
    .catch(() => dispatch(genresError()));
};
