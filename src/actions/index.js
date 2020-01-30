import {
  SELL_SPOT,
  TOGGLE_LOT,
  CHANGE_MODE,
  LOADING_SPOTS,
  GET_SPOTS
} from "./types";

const axios = require("axios").create({
  baseURL: "https://localhost:5000"
});

export const changeMode = () => dispatch => {
  dispatch({
    type: CHANGE_MODE
  });
};

export const toggleLot = id => dispatch => {
  dispatch({
    type: TOGGLE_LOT,
    payload: id
  });
};

export const getSpots = () => dispatch => {
  dispatch(setSpotsLoading());
  axios
    .get("/api/spots")
    .then(res =>
      dispatch({
        type: GET_SPOTS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const sellSpots = spot => (dispatch, getState) => {
  axios
    .post("/api/spots", spot)
    .then(res => dispatch({ type: SELL_SPOT, payload: res.data }))
    .catch(err => console.log(err));
};

export const setSpotsLoading = () => dispatch => {
  dispatch({
    type: LOADING_SPOTS
  });
};
