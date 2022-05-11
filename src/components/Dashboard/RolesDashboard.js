import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch} from 'react-redux';
import user from '../img/random.jpg';
import SuccefullPopup from '../succesfull';
import {Link} from 'react-router-dom';
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
function SetRoles() {
  
    const { loading } = useLoader();
    return (
        <div>
          {/* {loading && <SkeletonUI />}
        {!loading && ( */}
               <div className=" w-full h-full md: block justify-start pt-[100px] pb-[80px] p-8 ">
               <div className="block w-full">
                <h2 className='font-bold'>CHANGE USER ROLE</h2>
                <input type="text" id='Uname' name="Uname" className="mt-12 px-[8px] w-[240px]  bg-white border-2 border-black text-sm" placeholder='Search user'/>
                </div>
                <div className="flex pt-8">
                  <div className="block">
                   <h3>Name:</h3>
                   <h3 className="mt-2">User Role:</h3>
                  </div>
                  <div className="block pl-4">
                   <h3>John Doe</h3>
                   <select className="mt-2 pl-[4px] w-[120px] bg-white border-2 border-black text-[12px]">
                   <option selected>Driver</option>
                   <option>Operator</option>
                   <option>Other</option>
                   </select>
                  </div>
                  
                  </div>
                  <div className="flex mt-12">
                    <div className="pr-9">
                    <button className="bg-white border-2 border-black px-4 w-[100px] text-[14px] hover:bg-black hover:text-white">Cancel</button>
                    </div>
                    <div>
                    <button className="bg-white border-2 border-black px-4 w-[100px] text-[14px] hover:bg-black hover:text-white">Update</button>
                    </div>
                  </div>
                

                 </div>
        {/* )} */}
          </div>
          
            );
  }
  export default SetRoles;