import axios from "axios";

export function getUsers(token) {
  return async function (dispatch) {
    dispatch(startFetching());

    try {
      const { data } = await axios.get("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetUsers(data.data));
    } catch (error) {
      // Menangani kesalahan langsung di sini
      dispatch({
        type: "ERROR_FETCHING",
        payload: error.message,
      });
    }
  };
}

function startFetching() {
  return {
    type: "START_FETCHING",
  };
}

function successGetUsers(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}

export function getUsersById(token, id) {
  return async function (dispatch) {
    dispatch(startFetching());

    try {
      const { data } = await axios.get(`http://localhost:3000/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "SUCCESS_GET_DATA_BY_ID",
        payload: data.data,
      });
    } catch (error) {
      // Menangani kesalahan langsung di sini
      dispatch({
        type: "ERROR_FETCHING",
        payload: error.message,
      });
    }
  };
}
