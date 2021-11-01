import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import languageReducer from "./languageReducer";
import moviesReducer from './moviesReducer';

export default combineReducers({
    counter: counterReducer,
    language: languageReducer,
    movies: moviesReducer
})