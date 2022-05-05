import React from 'react'
import icon from '../images/ICON.png'
import add from '../images/add.png';
import {Link} from 'react-router-dom';


function TopNavbar() {
    return (
        
    
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
    

      )
      }



  
export default TopNavbar