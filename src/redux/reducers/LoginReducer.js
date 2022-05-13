import { login } from "../actions/loginActions"

if (localStorage.getItem('auth')== null){
    localStorage.setItem('auth',false)
}

var loggedin =  localStorage.getItem("auth")

const LoginReducer =(state = localStorage.getItem('auth'),action) =>{
    var userEmail = action.Email
    var userPassword = action.Password
     switch(action.type){
         case 'login':
            if(
                 userEmail === 'gerukundo14@gmail.com' && userPassword === 'demo'
                 ){
                state =[userEmail,true]
                localStorage.setItem('auth',true)
                localStorage.setItem('login',[userEmail,true])
                return state
                }else{
                state= ['',false]

                return state
                                
            }
        default:
            return state

     }

} 

export default LoginReducer