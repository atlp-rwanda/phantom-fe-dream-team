
import  {resetReducer}  from "./resetReducers"; 
import routesReducer from "./routesSlice";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
    routesReducer

    //other reducers
});

export default allReducers;