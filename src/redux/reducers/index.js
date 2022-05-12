
import  {resetReducer}  from "./resetReducers"; 
import LoginReducer from "./LoginReducer";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
    LoginReducer
    //other reducers
});
export default allReducers;