const initialValue = {
  users: [],
  role: "",
  err: "",
};

function userReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FEATHING":
      return {
        ...state,
      };
    case "SUCCESS_GET_DATA_USER_KONSELING":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
