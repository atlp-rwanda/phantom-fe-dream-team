import  { resetActionType } from "../constants/resetActionType"
const {GET_EMAIL } = resetActionType;
const initialState = {
    email:'email@gmail.com',   
}

export const resetReducer = (state = initialState , { type }) =>{
    switch (type) {
        case GET_EMAIL:
            return state.email;     
        default:
            return state;
    }
}