import * as types from '../types';

const INITIAL_STATE = {
  counter: 0,
  //cartData: [],
};

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_COUNTER:
      return {
        ...state,
        counter: action.payload,
      };
    /* case "SET_CART":
      return {
        ...state,
        cartData: action.payload,
      }; */
    default:
      return state;
  }
}

// Redux thunk , context
