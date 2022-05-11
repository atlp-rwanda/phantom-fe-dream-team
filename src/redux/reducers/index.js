import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import { authReducer } from './authReducer';
import rolesReducer from "./RolesSlice";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    updateProfile,changePassword,
    resetReducer,authReducer,rolesReducer
    //other reducers
});

export default allReducers;