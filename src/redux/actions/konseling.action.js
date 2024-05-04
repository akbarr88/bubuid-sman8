import axios from "axios";

export function submitKonselingForm(token, id, formData) {
  return async function (dispatch) {
    dispatch(startFeathing());

    try {
      const { data } = await axios.post(
        "https://calm-ruby-chicken-tam.cyclic.app/konseling",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(successGetKonseling(data.data));
      window.location.href = "/konseling";
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

function successGetKonseling(data) {
  return {
    type: "SUCCESS_GET_DATA",
    payload: data,
  };
}
