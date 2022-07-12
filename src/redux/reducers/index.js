
import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
import routesReducer from "./routesSlice";
import LoginReducer from "./LoginReducer";
import busesReducer from "./busesReducer";
import PermissionReducer from "./PermissionReducer";
import PassengerReducer from "./PassengerSlice";
import SpeedReducer from "./SpeedSlice";
import isMoving from "./movement"
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
    SpeedReducer,
    isMoving

    
    //other reducers
});

export default allReducers;