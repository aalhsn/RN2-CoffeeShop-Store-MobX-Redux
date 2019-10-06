import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import coffeeReducer from "./coffeeReducer";

const rootReducer = combineReducers({
  rootCart: cartReducer,
  rootCoffee: coffeeReducer
});

export default rootReducer;
