import axios from "axios";

export function getUserIdKonseling(token, userId) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const {data} = await axios.get(`http://localhost:3000/users/${userId}/konseling`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); 
      dispatch(successGetUser(data.data));
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

function successGetUser(data) {
  return {
    type: "SUCCESS_GET_DATA_USER_KONSELING",
    payload: data,
  };
}