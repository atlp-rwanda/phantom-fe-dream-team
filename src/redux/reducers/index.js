import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import LoginReducer from "./LoginReducer";
import { authReducer } from './authReducer';
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
    LoginReducer,
    updateProfile,changePassword,
    resetReducer,authReducer
    //other reducers
});

export default allReducers;