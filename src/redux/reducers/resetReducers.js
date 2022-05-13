import  { resetActionType } from "../constants/resetActionType"
const {GET_EMAIL } = resetActionType;
const initialState = {
    email:'andela1@gmail.com'  
}

export const resetReducer = (state = initialState , { type }) =>{
    switch (type) {
        case GET_EMAIL:z
            return state.email;     
        default:
            return state;
    }
}