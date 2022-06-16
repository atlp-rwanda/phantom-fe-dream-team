
import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import routesReducer from "./routesSlice";
import LoginReducer from "./LoginReducer";
import busesReducer from "./busesReducer";
import AssignReducer from "./AssignSlice"
import PermissionReducer from "./PermissionReducer";
import PassengerReducer from "./PassengerSlice";
import SpeedReducer from "./SpeedSlice";
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
    AssignReducer,
    PassengerReducer,
    SpeedReducer

    
    //other reducers
});

export default allReducers;