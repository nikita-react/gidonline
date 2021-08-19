import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import movieReducer from './movies/reducer';
import genreReducer from './genres/reducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  genre: genreReducer,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;
