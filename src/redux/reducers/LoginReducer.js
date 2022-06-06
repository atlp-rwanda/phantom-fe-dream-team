import { login } from "../actions/loginActions"
import Data from '../../components/RegisterUser/users.json'

if (localStorage.getItem('auth')== null){
    localStorage.setItem('auth',false)
}

var loggedin =  localStorage.getItem("auth")

const LoginReducer =(state = loggedin,action) =>{
    var userEmail = action.Email
    var userPassword = action.Password
     switch(action.type){
         case 'login':
            Data.map((Info)=>{
            if(userEmail === Info.email && userPassword === Info.password){
                    state =[userEmail,true]
                    localStorage.setItem('auth',"00psgwwj7819012n#%$hj18*&")
                    localStorage.setItem('login',[userEmail,"00psgwwj7819012n#%$hj18*&"])
                    return state
                }else{
                    state= [userEmail,false]
                    return state
                                    
                }
            }
            )
        default:
            return state

     }

} 

export default LoginReducer
