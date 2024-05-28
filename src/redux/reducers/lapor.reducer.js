const initialValue = {
  lapors: {},
  isLoading: false,
  err: "",
};

function laporReducer(state = initialValue, action) {
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
        lapors: action.payload,
      };
    default:
      return state;
  }
}

export default laporReducer;