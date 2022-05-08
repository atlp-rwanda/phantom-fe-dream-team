import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch} from 'react-redux';
import user from '../img/random.jpg';
import SuccefullPopup from '../succesfull';
import {Link} from 'react-router-dom';
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
function Profile() {
  const UserInfo = useSelector(state => state.updateProfile);
  let username = UserInfo[0];
  let email= UserInfo[1];
  let phone= UserInfo[2];
    const { loading } = useLoader();
    return (
        <div>
          {loading && <SkeletonUI />}
        {!loading && (
               <div className=" w-full h-full md: flex justify-center pt-[100px] pb-[80px] p-8 ">
                 <div className="flex">
                   <div className=" flex md:hidden lg:w-[320px] h-[400px] content-center text-white">
                   <img className=" md:h-3/5 rounded-lg lg:h-full w-full  " src={user} alt="user icon"  />
                   </div>
                <div className="ml-0 pl-0 flex w-[500px] sm:w-[340px] md:grid-cols-2 block h-[370px] mt-[15px] content-center bg-blue-600">
                 <div className="pr-0 sm:pl-4 w-5/6 pt-0 md:pt-5">
                 <div className="pt-[40px] sm:w-[340px] md:pt-0 p-[40px] bg-blue-100 w-full h-full w-[500px]">
                   <p className="pl-0 w-[fit] sm:  pl-4 flex">
                 <img className="hidden md:flex w-[80px] h-[80px] rounded-full" src={user} alt="user icon"  />
                 <Link to='./editprofile'>
                 <Icon icon="ant-design:setting-filled"className="hidden md:flex h-16 w-9 ml-32" />
                 </Link>
                 </p>
                     <h1 className="pl-0 sm:pl-4 text-[22px] pb-[25px] flex "><u>MY INFORMATION</u></h1>
                 <h2 className="pl-0 sm:pl-4 text-[18px]">{username}</h2>
                 <h2 className="pl-0 sm:pl-4 flex">
                 <Icon icon="clarity:email-solid" className="mt-1"/>
                 <h2 className="pl-0 sm:pl-4 text-[13px] pl-[8px]">{email}</h2>
                 </h2>
                 <h2 className="pl-0 sm:pl-4 flex">
                 <Icon icon="bxs:phone" className="mt-1" />
                 <h2 className="pl-0 sm:pl-4 text-[13px] pb-[15px] pl-[8px]">{phone}</h2>
                 </h2>
                 
                 <div className=" pl-0 sm:pl-4 flex">
                  <div>
                  <h2>MY ROLE:</h2>
                  <h2>BUS TYPE:</h2>
                  <h2>PLATE N0:</h2>
                  </div>
                  <div className="pl-[10px]">
                  <h2>DRIVER</h2>
                  <h2>YOUTONG</h2>
                  <h2>RAD 709 C</h2>  
                  </div>
                  </div>
                 </div> 
                 <p className="flex md:hidden justify-items-center ">
                  <Link to="./editprofile" >
<button type="button" class="ml-0 rounded-md mt-1 py-1 self-baseline mb-5 text-sm font-medium text-gray-100 focus:outline-none bg-blue-600 border border-blue-400 hover:bg-blue-900 hover:text-white px-9 ml-20">Update info</button>
</Link>   </p>  
                 </div>
                </div>
                </div>
          </div> 
        )}
          </div>
          
            );
  }
  export default Profile;