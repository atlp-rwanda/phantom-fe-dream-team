import  { logoutActionType } from "../constants/logoutActionType"

const {LOGOUT } = logoutActionType;

const initialState = JSON.parse(localStorage.getItem('auth')) || {
    authenticated: false,
    user: null
  };

export const logoutReducer = (state = initialState , { type }) =>{
    switch (type) {
        case LOGOUT:
            state.authenticated = false;
            state.user = null;
            localStorage.removeItem('auth');
            return state
        default:
            return state;
    }
}
