import React from 'react'
import {Link} from 'react-router-dom';
import sent from '../../assets/message-sent.png'
import bus from '../../assets/bus.png'
export default function emailSent() {
  return (

    <form className='relative w-full '>
    <div className='flex-column justify-center text-center mt-20  lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-xs hidden lg:block md:hidden' />
     <div className='md:w-1/3 lg:w-1/3 w-2/3 md:shadow-xl lg:shadow-xl '>
     <p className='font-bold mt-5'>Email sent</p>
     <img src={sent} alt='sent' className='ml-40'/>
         <p className='mt-10 text-left ml-8 p-2'>A link to reset your password has been sent to your email</p>
         <div className='mt-5 md:mb-10 sm:mb'>
         <Link to="/ResetPassword">
             <button className='bg-blue text-white py-2.5 px-8 rounded-lg'>Home</button></Link>
         </div>
     </div>
    </div>
    </form>
  )
}
