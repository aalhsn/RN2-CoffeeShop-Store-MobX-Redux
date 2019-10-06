import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEESHOPS:
      const coffeeShops = action.payload;
      return {
        ...state,
        coffeeShops,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
