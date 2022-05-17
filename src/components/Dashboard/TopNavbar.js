import React, { useState } from 'react'
import icon from '../../assets/Dashboard-images/ICON.png'
import add from '../../assets/Dashboard-images/add.png';
import { Link } from 'react-router-dom';


function TopNavbar({goto}) {
  const [Title, setTitle] = useState('ADMIN DASHBOARD');
  return (


    <div className='flex flex-nowrap  bg-white row-auto items-center border-2 border-solid border-white border-b-black w-full sm:mt-10 h-20 sm:flex-col'>

        <div className='flex text-blue-600 sm:ml-[-3px]'>
            <div className='sm:mt-[-40px]'>
              <img className='h-16 w-8'
                src={icon} />
            </div>

                <div className="flex text-blue-800 mt-3 ml-10 ">
                  <h1 className='pt-2 text-[14px] sm:mt-[-40px]'>
                    {Title}</h1>
                </div>

          </div>

              <div className="flex sm:mt-10">

                    <div>
                      <Link to="#" onClick={goto}>
                        <img className="h-8 w-8 ml-[500px] mb-2 sm:mt-[-40px] sm:ml-2"
                          src={add} />
                      </Link>
                    </div>

                  <div className="relative ml-2 sm:mt-[-40px]">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </span>
                        <input type="search" name="q" className="py-2 text-sm text-white border-2 border-solid rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"></input>
                  </div>

              </div>

    </div>


  )
}





export default TopNavbar 