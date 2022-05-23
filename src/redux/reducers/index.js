import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
import  {resetReducer}  from "./resetReducers"; 
<<<<<<< HEAD
import routesReducer from "./routesSlice";
=======
import LoginReducer from "./LoginReducer";
import { authReducer } from './authReducer';

>>>>>>> develop
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
  
    resetReducer,
<<<<<<< HEAD
    routesReducer

=======
    LoginReducer,
    updateProfile,changePassword,
    resetReducer,authReducer
>>>>>>> develop
    //other reducers
});

export default allReducers;