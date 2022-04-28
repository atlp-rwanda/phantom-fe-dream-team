import React from 'react'
import {Link} from 'react-router-dom';
import bus from '../../assets/bus.png'
import { useSelector } from 'react-redux';
import swal from '@sweetalert/with-react';
export default function emailExist() {
  const resetEmail = useSelector( state => state.resetReducer.email )
  if(resetEmail){
    swal({
      title: "Good job!",
      text: "Email found",
      icon: "success",
    });
  }
  return (


    <form className='relative w-full '>
    <div className='flex-column justify-center ml-auto text-center mt-20  lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-xs hidden lg:block md:hidden' />
     <div className='md:w-1/3 lg:w-1/3 w-2/3 md:shadow-xl lg:shadow-xl'>
         <p className='font-bold mt-5'>How do you want to reset your password?</p>
         <p className='mt-10 text-left ml-8 p-2'>we found the following information asssociated with your account</p>
         <p className='mt-5 text-left ml-10'>Email a confirmation code to </p>
         <div className='flex'>
         <p className='text-left ml-10'>{resetEmail}</p>
         <input type='radio' className='ml-20' name='email'/>
         </div>
         <div className='mt-10 md:mb-10 sm:mb'>
         <Link to="/ResetPassword/EmailSentSuccessful" >
      <button className='bg-blue text-white py-2.5 px-8 rounded-lg'>Next</button></Link>
      <Link to="/ResetPassword" >
             <button className='bg-blue text-white py-2.5 px-8 rounded-lg ml-8'>Cancel</button></Link>
         </div>
     </div>
    </div>
    </form>

  )
}
