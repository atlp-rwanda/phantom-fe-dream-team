
import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import LoginReducer from "./LoginReducer";
import { authReducer } from './authReducer';
import PermissionReducer from "./PermissionReducer";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    
  
    resetReducer,
    updateProfile,changePassword,
    resetReducer,authReducer,PermissionReducer,LoginReducer
    //other reducers
});

export default allReducers;