const initialValue = {
    lapors: [],
    laporsbyId: {},
    isLoading: false,
    err: "",
  };
  
  function laporReducer(state = initialValue, action) {
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
          lapors: action.payload,
        };
      case "SUCCESS_GET_DATA_BY_ID":
        return {
          ...state,
          isLoading: false,
          laporsbyId: action.payload,
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
  
  export default laporReducer;
  