import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import user from '../img/random.jpg';
import SuccefullPopup from '../succesfull';
import { changePassword } from "../../redux/actions/index";
import { Link } from 'react-router-dom';
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
function ChangePassword() {
  const password = useSelector(state => state.changePassword);
  const dispatch = useDispatch();
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);

  function Submit() {
    const OldPassword = document.getElementById('Opassword').value;
    const NewPassword1 = document.getElementById('Npassword1').value;
    const NewPassword2 = document.getElementById('Npassword2').value;
    if (OldPassword == '' || NewPassword1 == '' || NewPassword2 == '') {
      document.getElementById("error").innerHTML = 'All inputs should be filled !!!';
    }
    else if (OldPassword != password) {
      document.getElementById("error").innerHTML = 'Incorrect old password !!!';
    }
    else if (NewPassword1.length < 6) {
      document.getElementById("error").innerHTML = 'A password shold be atleast 6 characters !!!';
    }
    else if (NewPassword1 != NewPassword2) {
      document.getElementById("error").innerHTML = 'New password not matching !!!';
    }
    else {
      dispatch(changePassword(NewPassword1))
      document.getElementById("error").innerHTML = '';
      setSucceed(true);
    }

  }
  function close() {
    setSucceed(false)
    window.location.reload()
  }
  if (succeed == true) {
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
        <div className="pt-32">
          <h1 className="pl-[260px] sm:pl-[0] not-italic subpixel-antialiased font-sans text-xl text-blue-600 text-center font-bold ">Change your password</h1>
          <div class="grid grid-cols-2  content-center">
            <div className="flex flex-col md:hidden justify-center items-center  pt-0 flex flex-col justify-center items-center flex flex-col justify-center items-center  pt-10 flex flex-col justify-center items-center  pt-0 mb-24   ">
              <img className="h-64 w-64 rounded-full " src={user} alt="user icon" />
            </div>
            <form class=" pt-10  border-none md:pt-4 border-blue-500 border-none sm:border-green-500 md:border-indigo-500 lg:border-red-500 xl:border-black ... ">
              <div className="text-sm sm:text-[12px] border-r-2 md:border-r-0 mr-0 border-indigo-500 mr-32  lg:mr-0 pt-12 pb-12" >
                <label class="flex">
                  <span class="px-[43px] xxs:px-[10px] mt-0 font-medium text-blue-700 text-base">
                    Old Password:
                  </span>
                  <input type="password" id="Opassword" class="py-3 md:py-1 mt-0 px-5 w-64 py-1 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder="************" />
                </label>
                <label class="flex mt-6">
                  <span class="px-[39px] sm:px-[42px] mt-0 font-medium text-blue-700 text-base">
                    New Password:
                  </span>
                  <input type="password" id="Npassword1" class="py-1 mt-0 px-5 w-64  bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1" placeholder="************" />
                </label>
                <label class="flex mt-6">
                  <span class="px-[28.5px] sm:px-[42px] mt-0 font-medium text-blue-700  text-base  ">
                    Retype Password:
                  </span>
                  <input type="password" id="Npassword2" class="mt-0 px-5 w-64 py-1 bg-white border shadow-sm border-blue-400 placeholder-slate-500 focus:outline-none focus:border-blue-900 focus:ring-blue-700 block rounded-md sm:text-sm focus:ring-1 sm: " placeholder="************" />
                </label>
                <p id='error' className="pl-0 md:not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold"></p>
              </div>
              <div class=" border-t-2 md:border-t-0   border-indigo-500 ...  mr-32 lg:mr-0"></div>
              <p className="p-8 flex text-sm sm:text-[8px]">
                <button type="button" onClick={() => Submit()} class="ml-15 px-9 sm:px-4 text-sm md:text-[16px] ml-0 rounded-md mt-4 py-1  self-baseline  mb-5  font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-white hover:text-blue-700 lg:px-[10px]">Save</button>
                <Link to="../profile" >
                  <button type="button" class="ml-20 px-9 sm:px-4 text-sm md:text-[16px] rounded-md mt-4 py-1 self-baseline  mb-5 font-medium text-white focus:outline-none bg-blue-800 border border-blue-400 hover:bg-white hover:text-blue-700 lg:px-[10px]">Cancel</button>
                </Link>
              </p>
            </form>
            <SuccefullPopup trigger={succeed}>
              <button onClick={() => close()} class="absolute top-0 right-2">X</button>
              <h3 class="px-10">password changed</h3>
            </SuccefullPopup>
            <ErrorPopup trigger={error}>
              <button onClick={() => setError(false)} class="absolute top-0 right-2">X</button>
              <h3 class="px-10">An error occured</h3>
            </ErrorPopup>
          </div>
        </div>
      )}
    </div>
  );
}
export default ChangePassword;