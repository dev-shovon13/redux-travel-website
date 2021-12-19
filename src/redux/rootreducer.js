import { combineReducers } from "redux";
import shopReducer from "../redux/Shopping/shoppingReducer";

const rootReducer = combineReducers({
  shop: shopReducer,
});

export default rootReducer;
