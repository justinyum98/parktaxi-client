import { SELL_SPOT, GET_SPOTS, CHANGE_MODE } from "../actions/types";

const initialState = {
  items: [],
  mode: "buy",
  loading: false
};

const spots = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return { mode: state.mode === "buy" ? "sell" : "buy" };
    case GET_SPOTS:
      return { ...state, loading: false, items: action.payload };
    case SELL_SPOT:
      return [...state, { title: action.payload }];
    default:
      return state;
  }
};

export default spots;
