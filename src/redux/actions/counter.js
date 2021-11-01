import * as types from '../types';

// import { SET_COUNTER } from '../types';

export const changeCounter = (data) => {
  return {
    type: types.SET_COUNTER,
    payload: data,
  };
};
