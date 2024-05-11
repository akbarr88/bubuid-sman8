const initialValue = {
    users: [],
    usersbyId: {},
    isLoading: false,
    err: "",
  };
  
  function userReducer(state = initialValue, action) {
    switch (action.type) {
      case "START_FETCHING": // Mengubah case menjadi START_FETCHING
        return {
          ...state,
          isLoading: true,
        };
      case "SUCCESS_GET_DATA":
        return {
          ...state,
          isLoading: false,
          users: action.payload,
        };
      case "SUCCESS_GET_DATA_BY_ID":
        return {
          ...state,
          isLoading: false,
          usersbyId: action.payload,
        };
      case "ERROR_FETCHING": // Menambahkan case untuk menangani error fetching
        return {
          ...state,
          isLoading: false,
          err: action.payload,
        };
      default:
        return state;
    }
  }
  
  export default userReducer;
  