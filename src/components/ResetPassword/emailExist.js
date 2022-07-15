import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png'
import { useSelector } from 'react-redux';
import { backendUrl } from "../../utils/Api";
import { useNavigate } from "react-router-dom";
import { useLoader } from '../useLoader';
import ErrorPopup from './error';
export default function emailExist() {
  // const resetEmail = useSelector( state => state.resetReducer.email )

  const redirect = useNavigate();
  const [token, setToken] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [loading1,setLoading1]=useState(false)
  const { loading } = useLoader();

  const handleOnChange = (e) => {
    setToken(e.target.value);
  };
  const handleOnChange1 = (e) => {
    setPass(e.target.value);
  };
  const handleOnChange2 = (e) => {
    setPass1(e.target.value);
  };
  const handleOnChange3 = (e) => {
    setEmail(e.target.value);
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

  //  //integration 
  const handleSubmit = (event,token,pass,pass1,email) => {
    event.preventDefault()
      if(pass===pass1){
      setLoading1(true)
      fetch(`${backendUrl}/users1/reset/${token}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
           },
        body: JSON.stringify({
          email:email,
          password:pass, 
          comfirmPassword:pass1
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            setTimeout(() => {
             
              redirect("/ResetPassword/EmailSentSuccessful");
            }, 2000);
          } else if (data.status === "fail") {
          } else {
          console.log("failure");
          }

        
        });
      }else if(pass != pass1)
      {
      setError(true)
      }
  };
  return (
    <>
    <ErrorPopup trigger={error}>
    <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
    <h3 class="px-10">Password don't match</h3>
    </ErrorPopup> 
    <form className='relative w-full '>
    <div className='flex justify-center ml-auto text-center mt-40 mb-20 lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-a lg:block md:hidden' />
     <div className='w-1/3  xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
         <p className='font-bold mt-5'>Check your email and enter your confirmation code here</p>
         <input 
         value={token}
         onChange={handleOnChange}
         type='text' 
         placeholder='Enter your code' 
         className='border-2 border-black  mt-5 rounded-lg py-1 p-1 sm:w-[90%]'/>
           <input 
         value={email}
         onChange={handleOnChange3}
         type='text' 
         placeholder='Enter your email again' 
         className='border-2 border-black  mt-5 rounded-lg py-1 p-1 sm:w-[90%]'/>
           <input 
         value={pass}
         onChange={handleOnChange1}
         type='password' 
         placeholder='New Password' 
         className='border-2 border-black  mt-5 rounded-lg py-1 p-1 sm:w-[90%]'/>
           <input 
         value={pass1}
         onChange={handleOnChange2}
         type='password' 
         placeholder='Confirm your password' 
         className='border-2 border-black  mt-5 rounded-lg py-1 p-1 sm:w-[90%]'/>
         <div className='mt-2 md:mb-10 sm:mb-10 lg:mb-10 xs:flex xs:justify-center'>
     
      {!loading1 &&
                      
                    
      <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' onClick={(event)=>handleSubmit(event,token,pass,pass1,email)}>Next</button>
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
      <Link to="/ResetPassword" >
             <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-8'>Cancel</button></Link>
         </div>
     </div>
    </div>
    </form>
    </>

  )
}
