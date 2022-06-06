import React from 'react'
import username from '../../assets/Dashboard-images/username.png';
import route from '../../assets/Dashboard-images/routes.png';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BiBus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function logout(){
    localStorage.removeItem("auth"); 
    location.assign("../");
}


function Sidebar({ setRoute }) {
    
    return (
        <section className='flex flex-col basis-1/5 bg-white border-2 border-white border-solid border-r-black h-full gap-5 col-auto items-center mt-3 sm:justify-items-center sm:m-auto'>
            <div className='flex flex-wrap mt-3'>
                <img classNam e='h-12 w-12 gap-2 '
                    src={username} />
                <h1 className='text-blue-600 flex text-center pt-2 hover:text-black md:hidden'>Username</h1>
            </div>
            <div>
            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <Link className='flex' to="Routes">
                    <img className=' h-6 w-6 mr-2'
                        src={route} />
                    <h1 className='md:hidden'>Routes</h1>
                </Link>
            </div>
            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <Link className='flex' to="Buses">
                    <BiBus className='h-6 w-6 mr-2' />
                    <h1 className='md:hidden'>Buses</h1>
                </Link>
            </div>
            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <Link className='flex' to="Drivers">
                    <BsPersonBadgeFill className='h-6 w-6 mr-2' />
                    <h1 className='md:hidden'>Drivers</h1>
                </Link>
            </div>
            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <Link className='flex' to="Users">
                    <FaUsers className='h-6 w-6 mr-2' />
                    <h1 className='md:hidden'>Users</h1>
                </Link>
            </div>
            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <Link className='flex' to="Roles">
                    <FaUsers className='h-6 w-6 mr-2' />
                    <h1 className='md:hidden'>Roles</h1>
                </Link>
            </div>
            <div className='flex text-center pt-10 mt-40 hover:text-blue-600'>
                {/* <Link className='flex' to="/Home"> */}
                    <RiLogoutBoxLine className='h-6 w-6 mr-2' />
                    {/* <h1 onclick="logout()" className='md:hidden'>Logout</h1> */}
                    <button onClick={logout}>
                   Logout
                    </button>
                {/* </Link> */}
            </div>
            </div>
           
        </section>
    )
}
export default Sidebar;
