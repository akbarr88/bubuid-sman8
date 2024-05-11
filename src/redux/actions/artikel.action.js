import axios from "axios";

export function getArtikels(token) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get("http://localhost:3000/artikel", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetArtikels(data.data));
    } catch (error) {
      dispatch(errorFetching(error.message));
    }
  };
}

function startFeathing() {
  return {
    type: "START_FEATHING",
  };
}

function successGetArtikels(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}

function successGetArtikelsById(data) {
  return {
    type: "SUCCESS_GET_DATA_BY_ID",
    payload: data,
  };
}

export function getArtikelById(token, id) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get(`http://localhost:3000/artikel/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetArtikelsById(data.data));
    } catch (error) {
      dispatch(errorFetching(error.message));
    }
  };
}
