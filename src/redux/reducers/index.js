import updateProfile from "./updateProfile";
import changePassword from "./changepassword";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    updateProfile,changePassword
    //other reducers
});

export default allReducers;