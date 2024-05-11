import axios from "axios";



export function submitLaporan(token, formData) {
  console.log(formData,"form data????????????")
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const { data } = await axios.post(
        "http://localhost:3000/lapor",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(successGetLapor(data.data));
      window.location.href = "/lapor";
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

function successGetLapor(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}
