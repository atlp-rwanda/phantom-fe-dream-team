import React from 'react'
import username from '../../assets/Dashboard-images/username.png';
import route from '../../assets/Dashboard-images/routes.png';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BiBus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import {GiArchiveRegister} from 'react-icons/gi';

function sidebar({ setRoute }) {
    return (
        <section className='flex flex-col basis-1/5 bg-white border-2 border-white border-solid border-r-black h-screen gap-5 col-auto items-center m-auto sm:justify-items-center sm:m-auto'>
            <div className='flex flex-wrap'>
                <img className='h-12 w-12 gap-2 mt-4'
                    src={username} />
                <h1 className='flex text-center pt-6 mt-1 gap hover:text-blue-600 md:hidden'>Username</h1>
            </div>

                <div className='text-blue-600 flex text-center pt-10 hover:text-black'>

                    <Link className='flex' to="Routes">
                        <img className=' h-6 w-6'
                            src={route} />
                             <h1 className='md:hidden'>Routes</h1>
                        
                    </Link>
                </div>

                    <div className='text-blue-600 flex text-center pt-10 hover:text-black'>

                        <Link className='flex' to="Buses">
                            <BiBus className='h-6 w-6' />
                            <h1 className='md:hidden'>Buses</h1>
                        </Link>

                    </div>

                        <div className='text-blue-600 flex text-center pt-10 hover:text-black'>

                            <Link className='flex' to="Users">
                                <GiArchiveRegister className='h-6 w-6' />
                                <h1 className='md:hidden'>Register</h1>
                            </Link>

                        </div>

                            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>

                                <Link className='flex' to="User">
                                    <FaUsers className='h-6 w-6' />
                                    <h1 className='md:hidden'>Users</h1>
                                </Link>

                            </div>
                             <div className='text-blue-600 flex text-center pt-10 hover:text-black'>

                                <Link className='flex' to="Drivers">
                                    <BsPersonBadgeFill className='h-6 w-6' />
                                    <h1 className='md:hidden'>Drivers</h1>
                                </Link>

                            </div>

                                <div className='flex text-center pt-10 mt-[50px] hover:text-blue-600'>

                                    <Link className='flex' to="/Home">
                                        <RiLogoutBoxLine className='h-6 w-6' />
                                        <h1 className='md:hidden'>Logout</h1>
                                    </Link>

                                </div>

        </section>

    )
}

export default sidebar