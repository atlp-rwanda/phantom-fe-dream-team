import React from 'react'
import bg from './img/bg.jpg'
import { useReducer } from 'react';
import { useState, useEffect } from "react";
//  import {BsPersonFill} from 'react-icons/bs'
//  import {AiTwotoneLock} from 'react-icons/ai'

const intialState ={
  email: '',
  password: '',
};

function reducer(state, action){
    return {...state, [action.input] : action.value};
  
}




function Login() {

  const [state, dispatch] = useReducer(reducer, intialState);

  console.log(state);

  function handlClick(e) {



      const email =document.getElementById('email').value;
  const Password=document.getElementById('pass').value;

      if(email =='' || Password ==''){
        document.getElementById("error").innerHTML ='Email or Password should not be blank !!!';
      }else{
       const a=ValidateEmail(email);
        if(a==true){
          e.preventDefault();
    alert(`Hey ${state.email} you have successfully loged in !`);
        window.location.assign('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwirgraEgL_3AhW6RfEDHR2iBdcQPAgI')
      }else{
      document.getElementById("error").innerHTML ='Enter a valid email !!!';
      }
     }

    
  }

  function onChange(e) {
   const action = {
     input : e.target.name,
     value : e.target.value,
   }
   dispatch(action);
  }



  function ValidateEmail(mail) 
    {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(mail.match(mailformat))
      {
        return (true)
      }
        return (false)
    }
     function submit(){

      const email =document.getElementById('email').value;
  const Password=document.getElementById('pass').value;

      if(email =='' || Password ==''){
        document.getElementById("error").innerHTML ='Email or Password should not be blank !!!';
      }else{
       const a=ValidateEmail(email);
        if(a==true){
        window.location.assign('https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwirgraEgL_3AhW6RfEDHR2iBdcQPAgI')
      }else{
      document.getElementById("error").innerHTML ='Enter a valid email !!!';
      }
     }
    }

    

  return (
      
      <>
      
    <h1 class="text-blue-500 font-bold text-center  top-10 text-[36px] top-[3px]">SignIn</h1>

    <div >
    {
       
    <div className='relative'>
    <div className='flex-column justify-center ml-auto text-center mt-20  lg:flex md:flex'>
     <img src={bg} alt='bus' className='w-1/3 shadow-xs hidden lg:block md:hidden' />
     <div className='md:w-1/3 lg:w-1/3 w-2/3 shadow-xl' >
     <label className='block text-gray-700 text-center mt-2'>Sign in to your account</label>

  <div className=' text-center'>
 

    <form className='mt-6' >
      <div>
      
        <input 
        name="email"
       id="email"
        type='email' 
        placeholder='Username' 
        onChange={onChange}
        className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none' />
    

       
      </div>
    

      <div className='mt-4'>
       
        <input 
        name="password"
        id="pass"
        onChange={onChange}
        type='password'  placeholder='Password'  className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none' />
              
      </div>

      <p id='error' className="not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold"></p>

      <button  className='w-1/5 px-4 py-3 rounded-lg bg-gray-200 mt-2 border bg-blue-500 hover:bg-blue-400 focus:bg-#1d4ed8 text-white font-semibold focus:outline-none'
      onClick={handlClick}>Log In</button>
    </form>
    <div className='text-center mt-2'>
        <a href='#' className='text-sm  hover:text-blue-700 focus:text-blue-700'>Forgotten Password?</a>
      </div>

    <hr class='my-6 border-gray-300 w-1/5'/>

   

    <p className='mt-8 text-center'>
      Not amember? 
      <a href='#' className='text-blue-500 hover:text-blue-700 font-semibold'>
        Regist
      </a>
    </p>
  </div>


 

         
     </div>
    </div>
    </div>
    
    }

    </div>
</>
  )
}

export default Login



