import  { resetActionType } from "../constants/resetActionType"

const {GET_EMAIL } = resetActionType;

export const getEmail = () =>{
    return {
        type: GET_EMAIL
    }
}
