import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch} from 'react-redux';
import user from '../img/user.png';
import SuccefullPopup from '../succesfull';
import {Link} from 'react-router-dom';
import ErrorPopup from "../error";
import {updateProfile} from "../../redux/actions/index";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
function Profile() {


  
    const UserInfo = useSelector(state => state.updateProfile);
    const dispatch = useDispatch();
    const [succeed, setSucceed] = useState(false);
    const [error, setError] = useState(false);
    let username = UserInfo[0];
    let email= UserInfo[1];
    var i=0;
    function ValidateEmail(mail) 
    {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(mail.match(mailformat))
      {
        return (true)
      }
        return (false)
    }



    function removeReadonly (){
      document.getElementById('Uname').readOnly = false;
      document.getElementById('Uname').value = username;
      document.getElementById('Email').readOnly = false;
      document.getElementById('Email').value = email;
      document.getElementById("editPicture").innerHTML=`<label>
      <input type="file" name="image" accept="image/x-png,image/gif,image/jpeg,image/jpg" required class="hidden"></input><strong>CHANGE</strong></label>`
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
  const Email1 =document.getElementById('Email').value;
  if(username1 =='' || Email1 ==''){
    document.getElementById("error").innerHTML ='Username and Email should not be blank !!!';
  }else{
   const a=ValidateEmail(Email1);
    if(a==true){
    dispatch(updateProfile(username1,Email1))
    document.getElementById("error").innerHTML ='';
    setSucceed(true);
  }else{
  document.getElementById("error").innerHTML ='Enter a valid email !!!';
  }
}}
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
if (succeed==true){
  setTimeout(() => {
    setSucceed(false)
    window.location.reload()
  }, "5000")
}
const { loading } = useLoader();
    return (
      <div>
        {loading && <SkeletonUI />}
      {!loading && (

        <div class="pt-32 grid grid-cols-1 md:grid-cols-2 content-center">
            <div  className="hidden md:flex flex-col justify-center items-center  pt-4 flex flex-col justify-center items-center flex flex-col justify-center items-center  pt-10 flex flex-col justify-center items-center  pt-40   ">
            <img className="w-16 md:w-32 lg:w-48 " src={user} alt="user icon"  />
            <p id='editPicture'>
            </p>
            </div>
            <form class =" pt-10  border-none md:pt-4 border-blue-500 border-none sm:border-green-500 md:border-indigo-500 lg:border-red-500 xl:border-black ... ">
            <div className ="text-[12px]sm:text-sm border-r-0 md:border-r-2 mr-0 border-indigo-500 mr-0  lg:mr-32 pt-12 pb-12" >
            <label class="flex">
  <span class="mt-2 text-sm font-medium text-blue-700 px-[30.5px] text-base  ">
    Username:
  </span>
  <input type="text" id='Uname' name="Uname" className="mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder={username} readOnly />
</label>
<label class="flex mt-6">
  <span class=" mt-2 text-sm font-medium text-blue-700 px-[47.5px]  text-base ">
    Email:
  </span>
  <input type="email" id='Email' name="Email" className="py-2 md: mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder={email} readOnly />
</label>
<label class="flex mt-6">
  <span class="mt-2 text-sm font-medium text-blue-700 px-[33px] text-base  ">
    Password:
  </span>
  <input type="text" name="Password" className="mt-0 px-5 w-64 py-2 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder="***********" readOnly />
</label>
<p id='error' className="not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold"></p>
</div>
<div class="border-t-0 sm:border-t-2 mr-0  border-indigo-500 ...  lg:mr-32"></div>
<p className="text-[12px] sm:text-sm text-center">
<button type="button" onClick={() => Buttons1()} className="ml-1 px-[4px] rounded-md mt-4 py-1 self-baseline  mb-5 font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 lg:px-9 ml-0"><p id='operation1'>Update profile</p></button>

<button type="button" onClick={() => Buttons2()} className="ml-0 px-[4px] rounded-md mt-4 py-1 self-baseline  mb-5 font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 lg:px-9 ml-20 mr-20"><p id='operation2'>Change password</p></button>
</p>
</form>




 <SuccefullPopup trigger={succeed}>
 <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
  <h3 class="px-10">Profile Updated</h3>
</SuccefullPopup> 
<ErrorPopup trigger={error}>
<button onClick={()=>setError(false)} className="absolute top-0 right-2">X</button>               
  <h3 class="px-10">An error occured</h3>
</ErrorPopup>
        </div> 
      )}
        </div>
        
          );
}
export default Profile;