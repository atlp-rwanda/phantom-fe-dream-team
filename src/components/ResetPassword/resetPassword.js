import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png';
import { useSelector } from 'react-redux';
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
import ErrorPopup from './error';
import { backendUrl } from "../../utils/Api";
import {useNavigate } from 'react-router-dom';
export default function resetPassword() {
  const navigate = useNavigate()
  const { loading } = useLoader();
  const resetEmail = useSelector( state => state.resetReducer.email )
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setsuccess] = useState("");
  const [path, setPath] = useState("");
  const [loading1,setLoading1]=useState(false)


 

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setsuccess("Email is Valid");
      setMessage("")
      console.log(email)

      if(email==resetEmail){
      setPath("/ResetPassword/EmailExists");
    }else{
      setError(true);
    }
  


      
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is Not Valid");
      setsuccess("")
    }
    else if (email == "") {
      setMessage("Email is Required");
      setsuccess("")
    }  else {
      setMessage("")
      setsuccess("")
    }
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
      setMessage("")
      setsuccess("")
  };
    //popup
    const [error, setError] = useState(false);
    function close(){
      setError(false)
      window.location.reload()
    }
    if (error==true){
      setTimeout(() => {
        setError(false)
      }, "5000")
    }

    //integration 
      function handleReset(email) {
        if(email){
          setLoading1(true)
        }
        let headersList = {
          Accept: "*/*",
          "Content-Type": "application/json",
        };
    
        let bodyContent = JSON.stringify({
          email: email,
        });
    
        fetch(`${backendUrl}/users1/forgotpassword`, {
          method: "POST",
          body: bodyContent,
          headers: headersList,
        })
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            if (result.status == "fail") {
              setError(true);
              setLoading1(false)
              console.log("THIS IS A RESULT", result.status);
            } 
            if (result.status == "success") {
              navigate("/ResetPassword/EmailExists");
              console.log("THIS IS A RESULT", result.status);
              }
          })
          .catch((error) => {
            console.log(email);
            console.log("Internal sever error!");
          });
      };

  return (
    <div>
        <ErrorPopup trigger={error}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 class="px-10">Email not found</h3>
        </ErrorPopup> 
    {loading && <SkeletonUI />}
    {!loading && (
    <form className='relative w-full '>
    <div className='flex justify-center ml-auto text-center mt-40 mb-20  lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-a lg:block md:hidden' />
     <div className='w-1/3 xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
         <p className='mt-10'>Reset Password</p>
         <p className='mt-20'>find your phantom account</p>
         <input 
             id="email"
             value={email}
             onChange={handleOnChange}
         type='text' 
         placeholder='Enter your email' 
         className='border-2 border-black  mt-5 rounded-lg py-2 p-2 sm:w-[90%]'/>
          <p className="text-red-500">{message}</p>
          <p className="text-green-700">{success}</p>
         <div className='mt-5 md:mb-10 xs:flex xs:justify-center sm:mb-10 lg:mb-10 '>
       
       {!loading1 &&
                      
                      <Link  to={path}>
                      <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg mb-10' onClick={()=>handleReset(email)}>Search</button>
                      </Link>
                      }
        {loading1 &&
                     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg mb-10' > 
                     <svg role="status" class="inline w-4 h-4 mr-2 text-gray-900 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                     </svg>
                     Loading...
                 </button>
                      }
       <Link to="/">
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-8'>Cancel</button></Link>
         </div>
     </div>
    </div>

    </form>
         )}
         </div>
    
  )
}