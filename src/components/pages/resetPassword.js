import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png';
import { useSelector } from 'react-redux';
import swal from '@sweetalert/with-react';
import { useLoader } from './useLoader';
import SkeletonUI from './skeletonUI';

export default function resetPassword() {
  const { loading } = useLoader();
  const resetEmail = useSelector( state => state.resetReducer.email )
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setsuccess] = useState("");
  const [path, setPath] = useState("");

 

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setsuccess("Email is Valid");
      setMessage("")
      console.log(email)

      if(email==resetEmail){
      setPath("/ResetPassword/EmailExists");
    }else{
      swal({
        title: "Oops!",
        text: "Email not found",
        icon: "error",
        button: "Ok!",
      });
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
  return (
    <div>
    {loading && <SkeletonUI />}
    {!loading && (
    <form className='relative w-full '>
    <div className='flex-column justify-center ml-auto text-center mt-20  lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-xs hidden lg:block md:hidden' />
     <div className='md:w-1/3 lg:w-1/3 w-2/3 md:shadow-xl lg:shadow-xl'>
         <p className='mt-10'>Reset Password</p>
         <p className='mt-20'>find your phantom account</p>
         <input 
             id="email"
             value={email}
             onChange={handleOnChange}
         type='text' 
         placeholder='Enter your email' 
         className='border mt-5 rounded-lg py-2 p-2'/>
          <p className="text-red">{message}</p>
          <p className="text-green">{success}</p>
         <div className='mt-5 md:mb-10 sm:mb'>
         <Link  to={path}>
       <button className='bg-blue text-white py-2.5 px-8 rounded-lg mb-10'  onClick={emailValidation}>Search</button>
       </Link>
       <Link to="/ResetPassword">
     <button className='bg-blue text-white py-2.5 px-8 rounded-lg ml-8'>Cancel</button></Link>
         </div>
     </div>
    </div>

    </form>
         )}
         </div>
    
  )
}
