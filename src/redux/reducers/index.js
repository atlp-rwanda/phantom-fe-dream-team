import counterReducer from "./counterReducer";
import  {resetReducer}  from "./resetReducers"; 
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    resetReducer
    //other reducers
});

export default allReducers;