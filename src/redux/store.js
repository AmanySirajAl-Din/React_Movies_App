import { createStore } from "redux";
import detailsReducer from "./reducers";

//redux dev tool
const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); // for React Dev Tools

const store = createStore(detailsReducer, devTools);

export default store;