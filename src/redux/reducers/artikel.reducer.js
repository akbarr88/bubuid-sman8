const initialValue = {
  artikels: [],
  artikelbyId: {},
  isLoading: false,
  err: "",
};

function artikelReducer(state = initialValue, action) {
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
        artikels: action.payload,
      };
    case "SUCCESS_GET_DATA_BY_ID":
      return {
        ...state,
        isLoading: false,
        artikelbyId: action.payload,
      };
    default:
      return state;
  }
}

export default artikelReducer;
