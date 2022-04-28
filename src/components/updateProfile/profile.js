import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from 'react-redux';
import user from './img/user.png';
import SuccefullPopup from './components/succesfull';
import {Link} from 'react-router-dom';
import ErrorPopup from "./components/error";
import Vector from './img/vector.png';
import {updateProfile} from "../../redux/actions/index";
import Error from './img/errorIcon.png'
function Profile() {
    const counter = useSelector(state => state.updateProfile);
    const dispatch = useDispatch();
    const [succeed, setSucceed] = useState(false);
    let username = counter[0];
    let email= counter[1];
    var i=0;
    function removeReadonly (){
      document.getElementById('Uname').readOnly = false;
      document.getElementById('Uname').value = username;
      document.getElementById('Email').readOnly = false;
      document.getElementById('Email').value = email;
      document.getElementById("operation1").innerHTML ='Save';
      document.getElementById("operation2").innerHTML ='Cancel';
      document.getElementById("updatePhrase").innerHTML ='Update your profile';
  }

    
function Buttons1(){
  if(i==0){
    i=1;
    removeReadonly();
    }
  if(i==1){
  const username1 =document.getElementById('Uname').value;
  const Email1 =document.getElementById('Email').value
    dispatch(updateProfile(username1,Email1))
    setSucceed(true);
  }
}
function Buttons2(){
  if(i==0){
    window.location.assign("/profile/changepassword")
    }
  if(i==1){
    window.location.reload()
  }
}
function close(){
  setSucceed(false)
  window.location.reload()
}
    return (
      <diV>
      {/* <h1 id='updatePhrase' className="pl-0 md:not-italic subpixel-antialiased text-sm font-sans text-2xl text-blue-600 pl-[260px] text-center font-bold"></h1> */}

        <div class="grid grid-cols-1 md:grid-cols-2 content-center ...">
            <div  class="hidden md:flex flex-col justify-center items-center  pt-4 flex flex-col justify-center items-center  pt-40 flex flex-col justify-center items-center  pt-10 flex flex-col justify-center items-center  pt-40   ">
            <img className="w-16 md:w-32 lg:w-48 " src={user} alt="user icon"  />
            </div>
            <form class =" pt-10 md:pt-4 border-blue-500 sm:border-green-500 md:border-indigo-500 lg:border-red-500 xl:border-black ... ">
            <div class= "md:mr-0 border-r-2 border-indigo-500 lg:mr-32 pt-12 pb-12 " >
            <label class="flex">
  <span class="mt-2 text-sm font-medium text-blue-700 px-[30.5px] text-base  ">
    Username:
  </span>
  <input type="text" id='Uname' name="Uname" class="mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder={username} readOnly />
</label>
<label class="flex mt-6">
  <span class=" mt-2 text-sm font-medium text-blue-700 px-[47.5px]  text-base ">
    Email:
  </span>
  <input type="email" id='Email' name="Email" class="py-2 md: mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder={email} readOnly />
</label>
<label class="flex mt-6">
  <span class="mt-2 text-sm font-medium text-blue-700 px-[33px] text-base  ">
    Password:
  </span>
  <input type="text" name="Password" class="mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder="***********" readOnly />
</label>
</div>
<div class="md:mr-0 border-t-2 border-indigo-500 ...  lg:mr-32"></div>
<button type="button" onClick={() => Buttons1()} class="md:rounded-md mt-4 py-1 self-baseline px-9 ml-5 mr-20 mb-5 text-sm font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 place-self-center ..."><p id='operation1'>Update profile</p></button>

<button type="button" onClick={() => Buttons2()} class="md:rounded-md py-1 px-9 self-center mr-20 ml mb-5 text-sm font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><p id='operation2'>Change password</p></button>
</form>




 <SuccefullPopup trigger={succeed}>
<button onClick={()=>close()} class="absolute top-0 right-2">X</button>               
<img className=" absolute top-2 right-40 h-8 w-8  " src={Vector} alt="succed icon"  />
  <h3 class="px-10">Profile Updated</h3>
</SuccefullPopup> 
{/*<ErrorPopup trigger={succeed}>
<button onClick={()=>setSucceed(false)} class="absolute top-0 right-2">X</button>               
<img className=" absolute top-2 right-40 h-8 w-8  " src={Error} alt="succed icon"  />
  <h3 class="px-10">An error occured</h3>
</ErrorPopup>*/}
        </div> 
        </diV>
          );
}
export default Profile;