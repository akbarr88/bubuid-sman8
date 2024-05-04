import axios from "axios";

export function getPsikologs(token) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get("https://calm-ruby-chicken-tam.cyclic.app/psikolog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetPsikologs(data.data));
    } catch (error) {
      dispatch(errorFetching(error.message));
    }
  };
}

export function getPsikologById(token, id) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get(`https://calm-ruby-chicken-tam.cyclic.app/psikolog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(successGetPsikologsById(data.data));
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

function successGetPsikologs(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}

function successGetPsikologsById(data) {
  return {
    type: "SUCCESS_GET_PSIKOLOG_BY_ID",
    payload: data,
  };
}