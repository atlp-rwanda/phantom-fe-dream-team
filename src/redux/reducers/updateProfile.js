import { act } from "react-dom/test-utils";

let username=localStorage.getItem('username');
let email=localStorage.getItem('email');
let phone=localStorage.getItem('phone');
const updateProfile = (state =[username,email,phone] , action) => {
  var updatedName = action.Username
  var updatedEmail =action.Email
  var updatedPhone =action.Phone
  switch (action.type) {
    case "UPDATE":
    localStorage.setItem('username',updatedName);
    localStorage.setItem('email',updatedEmail);
    localStorage.setItem('phone',updatedPhone);
    state=[username,email,phone];
      return state;
    default:
      return state;
  }
};
export default updateProfile;