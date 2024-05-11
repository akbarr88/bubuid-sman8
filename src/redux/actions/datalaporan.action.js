import axios from "axios";

export function getLapors(token) {
  return async function (dispatch) {
    dispatch(startFetching());

    try {
      const { data } = await axios.get("http://localhost:3000/lapor", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetLapors(data.data));
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

function successGetLapors(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}

export function getLaporsById(token, id) {
  return async function (dispatch) {
    dispatch(startFetching());

    try {
      const { data } = await axios.get(`http://localhost:3000/lapor/${id}`, {
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
