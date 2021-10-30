const INITIAL_STATE = {
  lang: "en",
  counter : 0,
  users : []
};

export default function languageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LANGUAGE":
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
