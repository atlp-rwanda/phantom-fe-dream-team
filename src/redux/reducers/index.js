import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    updateProfile,changePassword,
    resetReducer
    //other reducers
});

export default allReducers;