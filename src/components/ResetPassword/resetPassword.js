import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png';
import { useSelector } from 'react-redux';
import { useLoader } from './useLoader';
import SkeletonUI from './skeletonUI';
import ErrorPopup from './error';

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
     <img src={bus} alt='bus' className='w-1/3 shadow-a lg:block md:hidden lg:hidden' />
     <div className='w-1/3 xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
         <p className='mt-10'>Reset Password</p>
         <p className='mt-20'>find your phantom account</p>
         <input 
             id="email"
             value={email}
             onChange={handleOnChange}
         type='text' 
         placeholder='Enter your email' 
         className='border-2 border-black  mt-5 rounded-lg py-2 p-2'/>
          <p className="text-red-500">{message}</p>
          <p className="text-green-700">{success}</p>
         <div className='mt-5 md:mb-10 xs:flex xs:justify-center sm:mb-10 lg:mb-10 '>
         <Link  to={path}>
       <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg mb-10'  onClick={emailValidation}>Search</button>
       </Link>
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