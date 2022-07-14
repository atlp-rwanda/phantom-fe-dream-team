import { act } from "react-dom/test-utils";
import {backendUrl} from "../../utils/Api.js"

let username=localStorage.getItem('username');
let email=localStorage.getItem('email');
let phone=localStorage.getItem('phone');
const updateProfile = (state =[username,email,phone] , action) => {
  var updatedName = action.Username
  var updatedEmail =action.Email
  var updatedPhone =action.Phone
  const id =localStorage.getItem("uid")
  switch (action.type) {
    case "UPDATE":
      var loggedin =  localStorage.getItem("auth-token")
      fetch(backendUrl+'profile/update/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json","auth-token": loggedin },
        body: JSON.stringify(
          {
          "email": updatedEmail,"names":updatedName,"phone":updatedPhone
          }
        )
      }).then((res) => {
        if(res.status==200){
          localStorage.setItem('user',[updatedEmail])
        }
        console.log(res);
      })
      return state;
      case "CHANGE":
        var loggedin =  localStorage.getItem("auth-token")
        const  Opassword=action.OldPassword;
        const Npassword=action.NewPassword
        fetch(backendUrl+'profile/update/'+id, {
          method: 'PATCH',
          headers: { "Content-Type": "application/json","auth-token": loggedin },
          body: JSON.stringify(
            {
            "Oldpassword": Opassword,"Newpassword":Npassword
            }
          )
        }).then((res) => {
          if(res.status==200){
            localStorage.setItem('user',[updatedEmail])
            localStorage.setItem('error',"")
          }else{
            localStorage.setItem('error',"wrong password")
          }
          console.log(res);
        })
        return state;

    default:
      return state;
  }
};
export default updateProfile;