import { act } from "react-dom/test-utils";

let username=localStorage.getItem('username');
let email=localStorage.getItem('email');
const updateProfile = (state =[username,email] , action) => {
  var updatedName = action.Username
  var updatedEmail =action.Email
  switch (action.type) {
    case "UPDATE":
    localStorage.setItem('username',updatedName);
    localStorage.setItem('email',updatedEmail);
    state=[username,email];
      return state;
    default:
      return state;
  }
};
export default updateProfile;