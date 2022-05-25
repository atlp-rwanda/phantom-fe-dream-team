
import {useNavigate} from 'react-router-dom';
// import { useEffect } from 'react';


const RequireAuth = () =>{
    let navigate = useNavigate();
    var loggedin =  localStorage.getItem("auth")
    console.log('loggedin',loggedin)
    if (loggedin =='false'){
        console.log("welcome home")
        window.location.href = '/signin'

        // navigate("/login");
      }
      else{
        //   window.location.href = '/dashboard'
      }
    // useEffect(() => {
    //     if (!loggedin){
    //         console.log("welcome home")
    //         navigate("/");
    //       }}, []);

}

export default RequireAuth;