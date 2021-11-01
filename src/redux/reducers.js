const INITIAL_STATE = {
    lang: "en",
    counter : 0,
    users : []
  };
  
  export default function detailsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "show_MovieDetails":
        return {
          ...state,
          lang: action.payload,
        };
      default:
        return state;
    }
  }