import { login } from "../actions/loginActions"
if (localStorage.getItem('auth')== null){
    localStorage.setItem('auth',false)
}

var loggedin =  localStorage.getItem("auth")
localStorage.setItem("auth",null)
const LoginReducer =(state = null,action) =>{
    var userEmail = action.Email
    var userPassword = action.Password
     switch(action.type){
         case 'login':
          const data={"email":userEmail,
          "password":userPassword};
          fetch('http://localhost:3200/api/v1/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
     }).then(function(response) {
      return response.json();
    }).then(function(data) {
          if(data.token){
            console.log(data.userID)
            localStorage.setItem("auth",true)
            localStorage.setItem("uid",data.userID)
              localStorage.setItem("auth-token",data.token)
              localStorage.setItem('user',[userEmail])
              return state=true;
            }else{
              console.log("Incorrect Login credentials")
              localStorage.setItem("auth",false)
              return state=false 
            }
    });
        default:
            return state=false

     }

} 

export default LoginReducer
