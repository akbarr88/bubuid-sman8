const initialValue = {
  konselings: [],
  isLoading: false,
  err: "",
};

function konselingReducer(state = initialValue, action) {
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
        konselings: action.payload,
      };
    default:
      return state;
  }
}

export default konselingReducer;