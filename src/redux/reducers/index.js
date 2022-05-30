import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import LoginReducer from "./LoginReducer";
import { authReducer } from './authReducer';
<<<<<<< HEAD
import busesReducer from "./busesReducer";

=======
import PermissionReducer from "./PermissionReducer";
>>>>>>> develop
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
    LoginReducer,
<<<<<<< HEAD
    updateProfile,
    changePassword,
    resetReducer,
    authReducer,
    busesReducer
=======
    updateProfile,changePassword,
    resetReducer,authReducer,PermissionReducer
>>>>>>> develop
    //other reducers
});

export default allReducers;