import React from 'react'
import user from '../../assets/user.png'
export default function register() {
function Upload(){
  document.getElementById("editPicture").innerHTML=`<label>
  <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required class="hidden"></input><strong>Upload Picture</strong></label>`
}
   

  return (
    <>
     <h1 className='text-center mt-[90px] text-2xl text-blue-700 font-Poppins'>Register Drivers & Operators</h1>
  
    <div className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex'>
      <div className='w-1/3 mt-[70px]'>
     <img src={user} alt='user' className='w-[60%]'/>
     <h1 className='text-blue-700 mr-40' id='editPicture' onClick={Upload}>Edit</h1>
     </div>
     <div className='w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
       <div className='flex'>
         <label for="first_name" class="text-blue-700 text-xl mt-[55px] ">First name:</label>
         <input 
         type='text' 
         placeholder='First name' 
         className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4'/>
       </div>
       <div className='flex'>
         <label for="last_name" class="text-blue-700 text-xl mt-6 ">Last name:</label>
         <input 
         type='text' 
         placeholder='Last name' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-4'/>
       </div>
       <div className='flex'>
         <label for="email" class="text-blue-700 text-xl mt-6 ">Email:</label>
         <input 
         type='text' 
         placeholder='Email' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[65px]'/>
       </div>
       <div className='flex'>
         <label for="phone" class="text-blue-700 text-xl mt-6 ">Phone:</label>
         <input 
         type='text' 
         placeholder='Phone number' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[55px]'/>
       </div>
       <div className='flex'>
         <label for="role" class="text-blue-700 text-xl mt-6 ">Role:</label>
         <select id="roles" class="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[67%] py-2 ml-[75px] mt-5 mb-10 shadow-b">
          <option selected>Role</option>
          <option value="A">Admin</option>
          <option value="D">Driver</option>
          <option value="O">Operator</option>
          </select>
       </div>
         </div>
     </div>
     <div className='flex justify-center mb-10'>
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' onClick={() => Buttons1()} >Register</button>
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-5'>Cancel</button>
     </div>
  
    </>
  )
}
