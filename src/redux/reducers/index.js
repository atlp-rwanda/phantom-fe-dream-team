import  {resetReducer}  from "./resetReducers"; 
import { authReducer } from './authReducer';
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    resetReducer,
    authReducer
    //other reducers
});

export default allReducers;