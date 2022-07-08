import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png'
import { useSelector } from 'react-redux';
import { backendUrl } from "../../utils/Api";
import { useNavigate } from "react-router-dom";
import ErrorPopup from './error';
export default function emailExist() {
  // const resetEmail = useSelector( state => state.resetReducer.email )

  const redirect = useNavigate();
  const [token, setToken] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");

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
      fetch(`${backendUrl}/users1/reset/${token}`, {
        method: "POST",
        mode: 'cors',
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
     
      <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' onClick={(event)=>handleSubmit(event,token,pass,pass1,email)}>Next</button>
      <Link to="/ResetPassword" >
             <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-8'>Cancel</button></Link>
         </div>
     </div>
    </div>
    </form>
    </>

  )
}
