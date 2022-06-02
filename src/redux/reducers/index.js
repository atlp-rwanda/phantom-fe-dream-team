import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import LoginReducer from "./LoginReducer";
import { authReducer } from './authReducer';
import AssignReducer from "./AssignSlice"
import busesReducer from "./busesReducer";

import PermissionReducer from "./PermissionReducer";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
    LoginReducer,
    updateProfile,
    changePassword,
    resetReducer,
    authReducer,
    busesReducer,
    updateProfile,changePassword,
    resetReducer,authReducer,
    AssignReducer,authReducer,PermissionReducer
    //other reducers
});

export default allReducers;