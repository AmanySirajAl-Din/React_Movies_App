const INITIAL_STATE = {
  movie_id: 0,
};

export default function detailsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "show_MovieDetails":
      return {
        ...state,
        movie_id: action.payload,
      };
    default:
      return state;
  }
}