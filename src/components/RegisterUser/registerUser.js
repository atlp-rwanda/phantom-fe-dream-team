import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import user from '../../assets/user.png'
import SuccefullPopup from '../Logout/success'
import ErrorPopup from '../ResetPassword/error';
import TopNavbar from '../Dashboard/TopNavbar';

const LOCAL_STORAGE_KEY = 'register'
export default function register() {
  const navigate = useNavigate();
   //success popup
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
       //error popup
       const [error, setError] = useState(false);
       function close(){
         setError(false)
         window.location.reload()
       }
       if (error==true){
         setTimeout(() => {
           setError(false)
         }, "3000")
       }
  //  end
function Upload(){
  document.getElementById("editPicture").innerHTML=`<label>
  <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required className="hidden"></input><strong>Upload Picture</strong></label>`
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

   //on submit 

const handlesubmit=(e)=>{
  if (firstname== '' && lastname== '' && email== '' && phone== ''){
    setMessage1("Email is Required");
    setMessage2("Firstname is Required");
    setMessage3("Lastname is Required");
    setMessage4("Phone number is Required");
  }
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (regEx.test(email) && firstname && lastname && email && phone && role) {
  setsuccess1("");
  setsuccess2("");
  setsuccess3("");
  setsuccess4("");
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
  }else{
  setError(true)
  }
}
//store data
useEffect(() => {
  const storedUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if (storedUsers) setUsers(storedUsers)
}, [])

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
}, [users])


//validation
//email validation
const [message1, setMessage1] = useState("");
const [success1, setsuccess1] = useState("");
const emailValidation = () => {
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  if (regEx.test(email)) {
    setsuccess1("Email is Valid");
    setMessage1("")
  } else if (!regEx.test(email) && email !== "") {
    setMessage1("Email is Not Valid");
    setsuccess1("")
  }
};
//firstname validation
const [message2, setMessage2] = useState("");
const [success2, setsuccess2] = useState("");
const firstNameValidation = () => {
  const regEx = /^[a-zA-Z][a-zA-Z ]{3,32}$/i;
  if (regEx.test(firstname)) {
    setsuccess2("Name is Valid");
    setMessage2("")
  } else if (!regEx.test(firstname) && firstname!== "") {
    setMessage2("Name is Not Valid");
    setsuccess2("")
  }
  else if (firstname== "") {
    setMessage2("");
    setsuccess2("")
  } 
};
//Lastname validation
const [message3, setMessage3] = useState("");
const [success3, setsuccess3] = useState("");
const lastNameValidation = () => {
  const regEx = /^[a-zA-Z][a-zA-Z ]{3,32}$/i;
  if (regEx.test(lastname)) {
    setsuccess3("Name is Valid");
    setMessage3("")
  } else if (!regEx.test(lastname) && lastname!== "") {
    setMessage3("Name is Not Valid");
    setsuccess3("")
  }
  else if (regEx.test(lastname)== "") {
    setMessage3("");
    setsuccess3("")
  } 
};
//phone number validation
const [message4, setMessage4] = useState("");
const [success4, setsuccess4] = useState("");
const phoneValidation = () => {
  const regEx = /(0|7|8)\d{8}$/;
  if (regEx.test(phone)) {
    setsuccess4("Phone number is Valid");
    setMessage4("")
  } else if (!regEx.test(phone) && phone!== "") {
    setMessage4("phone number is Not Valid");
    setsuccess4("")
  }
  else if (phone== "") {
    setMessage4("");
    setsuccess4("")
  } 
};
//on change
const handleOnChange=(e)=>{
setEmail(e.target.value)
emailValidation()
}
const handleOnChange1=(e)=>{
  setFirstname(e.target.value)
  firstNameValidation()
  }
const handleOnChange2=(e)=>{
    setLastname(e.target.value)
    lastNameValidation()
    }
const handleOnChange3=(e)=>{
      setPhone(e.target.value)
      phoneValidation()
      }

  return (
    <>
 <TopNavbar goto={e=>window.location.assign('/dashboard/Register/add')}/>
    <SuccefullPopup trigger={succeed}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 className="px-10">User Created</h3>
        </SuccefullPopup> 
        <ErrorPopup trigger={error}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 className="px-10">Please fill all input</h3>
        </ErrorPopup> 
      
     <h1 className='text-center mt-[10px] text-2xl text-blue-700 font-Poppins'>Register Drivers & Operators</h1>

    <div className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex sm:flex-col items-center sm:mt-[-20px]'>
      <div className='w-1/3 mt-[70px]'>
     <img src={user} alt='user' className='w-[60%] sm:w-[100%]'/>
     <h1 className='text-blue-700 mr-40 sm:ml-8' id='editPicture' onClick={Upload}>Edit</h1>
     </div>
     <div className='w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
       <div className='flex sm:flex-col'>
         <label htmlFor="first_name" className="text-blue-700 text-xl mt-[55px] sm:sr-only">First name:</label>
         <input 
         type='text' 
         placeholder='First name' 
         className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
         onChange={handleOnChange1} 
         value={firstname}
         />
       </div>
       <p className="text-red-500">{message2}</p>
      <p className="text-green-700">{success2}</p>
       <div className='flex'>
         <label htmlFor="last_name" className="text-blue-700 text-xl mt-6 sm:sr-only">Last name:</label>
         <input 
         type='text' 
         placeholder='Last name' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
         onChange={handleOnChange2} 
         value={lastname}/>
       </div>
       <p className="text-red-500">{message3}</p>
      <p className="text-green-700">{success3}</p>
       <div className='flex sm:justify-center'>
         <label htmlFor="email" className="text-blue-700 text-xl mt-6 sm:sr-only">Email:</label>
         <input 
         type='text' 
         placeholder='Email' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[65px] focus:outline-none sm:w-[250px] sm:ml-[-20px]'
         onChange={handleOnChange} 
         value={email}/>
       </div>
       <p className="text-red-500">{message1}</p>
      <p className="text-green-700">{success1}</p>
       <div className='flex '>
       <label htmlFor="email" className="text-blue-700 text-xl mt-6 sm:sr-only">Phone:</label>
         <input 
         type='text' 
         placeholder='Phone number' 
        className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[56px] focus:outline-none sm:w-[250px] sm:ml-[-20px] sm:ml-[15px]'
         onChange={handleOnChange3} 
         value={phone}/>
       </div>
       <p className="text-red-500">{message4}</p>
      <p className="text-green-700">{success4}</p>
       <div className='flex'>
         <label htmlFor="role" className="text-blue-700 text-xl mt-6 sm:sr-only">Role:</label>
         <select  onChange={(e)=>setRole(e.target.value)} value={role}  className="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[75px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px] sm:ml-[15px]">
          <option defaultValue>Role</option>
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