import { login } from "../actions/loginActions"
if (localStorage.getItem('auth')== null){
    localStorage.setItem('auth',false)
}

var loggedin =  localStorage.getItem("auth")
const LoginReducer =(state ={loading:false,done:false,pass:false},action) =>{
    var userEmail = action.Email
    var userPassword = action.Password
     switch(action.type){
         case 'login':
          state.loading=true
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
            //  state.loading=false
            console.log(data.userID)
            localStorage.setItem("auth",true)
            localStorage.setItem("uid",data.userID)
              localStorage.setItem("auth-token",data.token)
              localStorage.setItem('user',[userEmail])
              return state.pass=true

            }else{
              // state.loading=false
              state.done=true
              state.pass=false
              console.log("Incorrect Login credentials")  
              localStorage.setItem("auth",false)
               return state
            }
    },state.done=true);
        default:
            return state

     }

} 

export default LoginReducer