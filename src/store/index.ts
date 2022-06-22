import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { movieReducer, oneMovieReducer } from "./movies/reducer";
import genreReducer from "./genres/reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  oneMovie: oneMovieReducer,
  genre: genreReducer,
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
