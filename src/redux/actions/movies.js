import * as types from "../types";
import axiosInstance from "../../network/axiosConfig";

// export const getUsers = (data) => {
//   return {
//     type: types.GET_USERS,
//     payload: data,
//   };
// };

export const getUsers = () => (dispatch) => {
  return axiosInstance.get("/movies").then((res) =>
    dispatch({
      type: types.GET_MOVIES,
      payload: res.data,
    })
  );
};
