import { act } from "react-dom/test-utils";

let password=localStorage.getItem('password');
const changePassword = (state =password , action) => {
  var Npassword = action.NewPassword
  switch (action.type) {
    case "CHANGE":
    localStorage.setItem('password',Npassword);
    state=password;
      return state;
    default:
      return state;
  }
};
export default changePassword;