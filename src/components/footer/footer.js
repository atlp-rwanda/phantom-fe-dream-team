import React from 'react';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-slate-600 sm:text-sm text-ceneter px-0 sm:px-0 lg:px-8">
        <div className="text-center text-3xl text-white  sm:text-xl">
          <h1 className='mt-10'>Let’s connect!</h1>

        </div>
        <div className="flex justify-around mt-5 ">
          <div className="text-white flex flex-col space-y-4 items-center md:hidden xs:hidden">
            <div className="">
            <Icon icon="el:map-marker" width="36" />
            </div>
           <div className=" flex flex-col items-center space-y-4 ">
           <h3>kigali,Rwanda</h3>
            <h3>KN 20 Ave</h3>
           </div>
            
          </div>
          <div className="text-white flex flex-col space-y-4 items-center xs:text-sm">
            <div className="">
            <h3>Follow Us to Get Updates !</h3>
            </div>
          
            <div className=" flex mt-3 space-x-4 space-y-1 items-center">
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="et:facebook" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="et:twitter" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="et:linkedin" width="36" /></Link>
            <Link to={"/"} className=" hover:text-blue-700">
            <Icon icon="akar-icons:github-outline-fill" width="36" /></Link>
          
            </div>
             

          </div>
          <div className="text-white flex flex-col space-y-4 items-center md:hidden xs:hidden">
            <h3>Terms of Services</h3>
            <h3>Privacy Policy</h3>
            <h3>FAQ</h3>
          </div>
        </div>

        <div className='bg-slate-600'> 

          <h2 className="text-center text-white text-md mt-5 pb-4 sm:text-sm"><span>&copy;</span>All Rights Reserved By Phantmom 2022</h2>

        </div>
      </footer>
    </div>
  )
}
export default Footer;