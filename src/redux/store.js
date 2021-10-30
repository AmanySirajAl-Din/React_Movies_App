import { createStore } from "redux";
import languageReducer from "./reducer";

//redux dev tool
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(languageReducer, devTools);

export default store;
