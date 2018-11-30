import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import MainPageReducers from "./reducers/MainPageReducers";

export default combineReducers({
  routing: routerReducer,
  display: MainPageReducers
});
