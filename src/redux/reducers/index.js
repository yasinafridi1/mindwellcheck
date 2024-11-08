import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dashboardReducer from "./dashboardReducer";
// import otherServeyReducer from "./otherServeyData";

export default combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  // otherServey: otherServeyReducer,
});
