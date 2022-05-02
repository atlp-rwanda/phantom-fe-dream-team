import  { logoutActionType } from "../constants/logoutActionType"

const {LOGOUT } = logoutActionType;

export const Logout = () =>{
    return {
        type: LOGOUT
    }
}
