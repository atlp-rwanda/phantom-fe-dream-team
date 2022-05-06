import React from 'react'
import username from '../images/username.png';
import route from '../images/routes.png';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BiBus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsPersonBadgeFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';

 function sidebar({setRoute}) {
  return (
    <section className='flex flex-col basis-1/5 bg-white border-2 border-white border-solid border-r-black h-screen gap-5 col-auto items-center m-auto'>
        <div className='flex flex-wrap'>
          <img className='h-12 w-12 gap-2 mt-4'
            src={username} />
                <h1 className='flex text-center pt-6 mt-1 gap hover:text-blue-600 md:text-hidden'>Username</h1>
        </div>

            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <img className=' h-6 w-6'
                    src={route} />
                    <Link to="Routes">
                        <h1>Routes</h1>
                    </Link>
            </div>

            <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                <BiBus className='h-6 w-6' />
                    <Link to="Buses">
                        <h1>Buses</h1>
                    </Link>

            </div>

                <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                    <BsPersonBadgeFill className='h-6 w-6' />
                        <Link to="Drivers">
                            <h1>Drivers</h1>
                        </Link>

                </div>

                <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
                    <FaUsers className='h-6 w-6' />
                        <Link to="Users">
                            <h1>Users</h1>
                        </Link>

                </div>

                <div className='flex text-center pt-10 mt-40 hover:text-blue-600'>
                    <RiLogoutBoxLine className='h-6 w-6' />
                        <Link to="/Home">
                            <h1>Logout</h1>
                        </Link>

                </div>

      </section>

  )
}
export default sidebar