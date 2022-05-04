
import  {resetReducer}  from "./resetReducers"; 
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer
    //other reducers
});

export default allReducers;