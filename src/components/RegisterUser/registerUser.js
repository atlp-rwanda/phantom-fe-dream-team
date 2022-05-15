import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import LOGOUT from '../Logout/logout';
import {Link} from 'react-router-dom';
import user from '../../assets/user.png'
import SuccefullPopup from '../Logout/success'

const LOCAL_STORAGE_KEY = 'register'
export default function register() {
  const navigate = useNavigate();
   //popup
   const [succeed, setSucceed] = useState(false);
   function close(){
     setSucceed(false)
   }
   if (succeed==true){
     setTimeout(() => {
       setSucceed(false)
       navigate('/dashboard/Register')
     }, "2000")
   }
   //end
function Upload(){
  document.getElementById("editPicture").innerHTML=`<label>
  <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required class="hidden"></input><strong>Upload Picture</strong></label>`
}
const [users,setUsers]=useState([])
const [firstname,setFirstname]=useState('')
const [lastname,setLastname]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')
const [role,setRole]=useState('')
   // creating a ID for every todo
   const date = new Date();
   const time = date.getTime();

const handlesubmit=(e)=>{
  e.preventDefault();
  let user={
    ID: time,
    firstname,
    lastname,
    email,
    phone,
    role
  }
  setUsers([...users,user])
  setFirstname('')
  setLastname('')
  setEmail('')
  setPhone('')
  setRole('')
  if(user){
    setSucceed(true);
  }
}

useEffect(() => {
  const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedUsers) setUsers(storedUsers)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
}, [users])
  //  useEffect(()=>{
  //    localStorage.setItem('users',JSON.stringify(users));
  //  },[users])


  return (
    <>
    <LOGOUT/>
    <SuccefullPopup trigger={succeed}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 class="px-10">User Created</h3>
        </SuccefullPopup> 
     <h1 className='text-center mt-[90px] text-2xl text-blue-700 font-Poppins'>Register Drivers & Operators</h1>

    <div className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex sm:flex-col items-center'>
      <div className='w-1/3 mt-[70px]'>
     <img src={user} alt='user' className='w-[60%]'/>
     <h1 className='text-blue-700 mr-40 sm:ml-6' id='editPicture' onClick={Upload}>Edit</h1>
     </div>
     <div className='w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
       <div className='flex sm:flex-col'>
         <label for="first_name" class="text-blue-700 text-xl mt-[55px] sm:sr-only">First name:</label>
         <input 
         type='text' 
         placeholder='First name' 
         className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
         onChange={(e)=>setFirstname(e.target.value)} 
         value={firstname}
         />
       </div>
       <div className='flex'>
         <label for="last_name" class="text-blue-700 text-xl mt-6 sm:sr-only">Last name:</label>
         <input 
         type='text' 
         placeholder='Last name' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
         onChange={(e)=>setLastname(e.target.value)} 
         value={lastname}/>
       </div>
       <div className='flex sm:justify-center'>
         <label for="email" class="text-blue-700 text-xl mt-6 sm:sr-only">Email:</label>
         <input 
         type='text' 
         placeholder='Email' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[65px] focus:outline-none sm:w-[250px]'
         onChange={(e)=>setEmail(e.target.value)} 
         value={email}/>
       </div>
       <div className='flex '>
         <label for="phone" class="text-blue-700 text-xl mt-6 sm:sr-only">Phone:</label>
         <input 
         type='text' 
         placeholder='Phone number' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[55px] focus:outline-none sm:w-[250px]'
         onChange={(e)=>setPhone(e.target.value)} 
         value={phone}/>
       </div>
       <div className='flex'>
         <label for="role" class="text-blue-700 text-xl mt-6 sm:sr-only">Role:</label>
         <select id="roles" onChange={(e)=>setRole(e.target.value)} value={role}  class="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[75px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px]">
          <option selected>Role</option>
          <option value="Admin">Admin</option>
          <option value="Driver">Driver</option>
          <option value="Operator">Operator</option>
          </select>
       </div>
         </div>
     </div>
     <div className='flex justify-center mb-10'>
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' onClick={handlesubmit} >Register</button>
     <Link to="/dashboard/Register">
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-5'>Cancel</button>
     </Link>
     </div>

    </>
  )
}
