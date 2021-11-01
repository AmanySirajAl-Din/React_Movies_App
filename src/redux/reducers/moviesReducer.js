import * as types from "../types";

const INITIAL_STATE = {
  moviessList: [],
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
}

// Redux thunk , context
