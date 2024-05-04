const initialValue = {
  psikologs: [],
  psikologsById: {},
  isLoading: false,
  err: "",
};

function psikologReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FEATHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA":
      return {
        ...state,
        isLoading: false,
        psikologs: action.payload,
      };
    case "SUCCESS_GET_PSIKOLOG_BY_ID":
      return {
        ...state,
        isLoading: false,
        psikologsById: action.payload,
      };
    default:
      return state;
  }
}

export default psikologReducer;
