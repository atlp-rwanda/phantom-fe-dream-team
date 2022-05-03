import React from 'react'
import { useDispatch} from 'react-redux';
import { logoutUser  } from '../../redux/reducers/authReducer';
import {useNavigate } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from '../../assets/logo2.png';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
import { useLoader } from '../ResetPassword/useLoader';
import SkeletonUI from '../ResetPassword/skeletonUI';
export default function logout() {
    const { loading } = useLoader();
  const Username = useSelector( state => state.authReducer.user )
    const dispatch = useDispatch();
    const navigate = useNavigate();
    window.addEventListener("load", function () {
      if (!localStorage.getItem("auth")) {
        navigate('/login');
      }
    });
    const logout = () => {
        dispatch(logoutUser ());
        swal({
            title: "Success!",
            text: "You are logged out",
            icon: "success",
            button: "Ok!",
          });
        navigate('/login');
      };
      const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    {loading && <SkeletonUI />}
    {!loading && (
      <div>
      <nav className="bg-white-800 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <img
                                className="h-14 w-16"
                                src={logo}
                                alt="logo"
                            />
                        </div>
               
                        <div className="-mr-2 flex">
                        <Icon icon="bxs:user" color="#1442a7" className='mt-3 mr-2'/>
                        <h1 className='mr-5 mt-2 text-blue'>{Username}</h1>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-white-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 float-right">
                          
                                  <button
                                  onClick={logout}
                                  className="bg-blue text-white rounded-xl px-8">
                                  Logout
                                  </button>
                        
                            </div>
                        </div>
                    )}
                </Transition>
            </nav >
     </div>
         )}
         </div>
  )
}
