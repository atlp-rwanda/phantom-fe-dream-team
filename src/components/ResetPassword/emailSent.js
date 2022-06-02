import React from 'react'
import {Link} from 'react-router-dom';
import sent from '../../assets/message-sent.png'
import bus from '../../assets/bus.png'
export default function emailSent() {
  return (
    <form className='relative w-full '>
    <div className='flex justify-center text-center mt-40 mb-20 lg:flex md:flex'>
     <img src={bus} alt='bus' className='w-1/3 shadow-a lg:block md:hidden' />
     <div className='w-1/3 xs:w-[300px] 2xl:shadow-b '>
     <p className='font-bold mt-5'>Email sent</p>
     <div className='flex justify-center'>
     <img src={sent} alt='sent'/>
     </div>
         <p className='mt-10 text-left ml-8 p-2 xs:text-center'>A link to reset your password has been sent to your email</p>
         <div className='mt-5 md:mb-10 sm:mb-10 lg:mb-10 '>
         <Link to="/ResetPassword">
             <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg'>Home</button></Link>
         </div>
     </div>
    </div>
    </form>
  )
}