import counterReducer from "./counterReducer";
//import other reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer
    //other reducers
});

export default allReducers;