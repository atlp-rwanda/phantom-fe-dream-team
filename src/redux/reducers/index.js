
import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import routesReducer from "./routesSlice";
import LoginReducer from "./LoginReducer";
import AssignReducer from "./AssignSlice"
import busesReducer from "./busesReducer";
import PermissionReducer from "./PermissionReducer";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    
   PermissionReducer,
    routesReducer,
    LoginReducer,
    updateProfile,
    changePassword,
    resetReducer,
    busesReducer,
    AssignReducer

    
    //other reducers
});

export default allReducers;