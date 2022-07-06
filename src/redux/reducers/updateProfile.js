import { act } from "react-dom/test-utils";

let username=localStorage.getItem('username');
let email=localStorage.getItem('email');
let phone=localStorage.getItem('phone');
const updateProfile = (state =[username,email,phone] , action) => {
  var updatedName = action.Username
  var updatedEmail =action.Email
  var updatedPhone =action.Phone
  const ndata={email:updatedEmail}
  switch (action.type) {
    case "UPDATE":
      const id =localStorage.getItem("uid")
      var loggedin =  localStorage.getItem("auth-token")
      fetch('http://localhost:3200/api/v1/profile/update/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json","auth-token": loggedin },
        body: JSON.stringify(
          {
          "email": updatedEmail
          }
        )
      }).then((res) => {
        if(res.status==200){
          localStorage.setItem('user',[updatedEmail])
        }
        console.log(res);
      })
    // localStorage.setItem('username',updatedName);
    // localStorage.setItem('email',updatedEmail);
    // localStorage.setItem('phone',updatedPhone);
    // state=[username,email,phone];
      return state;
    default:
      return state;
  }
};
export default updateProfile;