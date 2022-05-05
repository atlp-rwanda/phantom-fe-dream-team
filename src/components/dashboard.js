import React from 'react';
import username from './images/username.png';
import icon from './images/ICON.png'
import add from './images/add.png';
import route from './images/routes.png';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { BiBus } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { Link, Route, Routes,} from 'react-router-dom';
import R from "./Routes";
import Buses from "./Buses";
import Drivers from "./Drivers";
import USER from "./users";
import Add from "./add";



function Dashboard() {
  return (

    <div className='flex sm:px-6 lg:px-8'>

      <section className='flex flex-col basis-1/5 bg-white border-2 border-white border-solid border-r-black h-screen gap-5 col-auto items-center m-auto'>
        <div className='flex flex-wrap'>
          <img className='h-12 w-12 gap-2 mt-4'
            src={username} />
          <h1 className='flex text-center pt-6 mt-1 gap hover:text-blue-600 md:text-hidden'>Username</h1>
        </div>

        <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
          <img className=' h-6 w-6'
            src={route} />
          <Link to="/dashboard/Routes">
            <h1>Routes</h1>
          </Link>
        </div>

        <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
          <BiBus className='h-6 w-6' />
          <Link to="/dashboard/Buses">
            <h1>Buses</h1>
          </Link>

        </div>

        <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
          <BsPersonBadgeFill className='h-6 w-6' />
          <Link to="/dashboard/Drivers">
            <h1>Drivers</h1>
          </Link>

        </div>

        <div className='text-blue-600 flex text-center pt-10 hover:text-black'>
          <FaUsers className='h-6 w-6' />
          <Link to="/dashboard/users">
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


      <section className='flex flex-col basis-4/5'>

        <div className='flex flex-nowrap justify-around bg-white row-auto items-center  border-2 border-solid border-white border-b-black w-full h-20 sm:flex'>

          <div className='flex text-blue-600'>
            <img className='w-20 h-12'
              src={icon} />
            <h1 className="flex  text-blue-800 mt-3 ml-16">
              ADMIN DASHBOARD</h1>
          </div>


          <div>
            <Link to="/add">
              <img className="h-8 w-8 ml-80"
                src={add} />
            </Link>
          </div>


          <div className="flex">

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" class="p-1">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </span>
              <input type="search" name="q" className="py-2 text-sm text-white border-2 border-solid rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"></input>
            </div>

          </div>

        </div>

        
          <Routes>
            
          </Routes>
      



        <section>
        Buses()
        </section>
      </section>



<<<<<<< HEAD
=======

>>>>>>> initial commit
    </div>

  )
}
<<<<<<< HEAD
export default Dashboard;

=======
export default Dashboard;
>>>>>>> initial commit
