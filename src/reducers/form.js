import { SELL_SPOT, GET_SPOTS, CHANGE_MODE } from "../actions/types";

const initialState = {
  items: [],
  mode: "buy",
  loading: false
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return { ...state, mode: state.mode === "buy" ? "sell" : "buy" };
    case GET_SPOTS:
      return { ...state, loading: false, items: action.payload };
    case SELL_SPOT:
      return { ...state };
    default:
      return state;
  }
};

export default form;
