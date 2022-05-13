import React from 'react';
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <div>
      <footer className="bg-gray-700 md: sm:text-xl text-ceneter px-0 sm:px-0 lg:px-8">
        <div className="text-center text-3xl text-white  pb-4 sm:text-xl">
          <h1>Let’s connect!</h1>

        </div>
        <div className="flex justify-around mt-5 ">
          <div className="text-white flex flex-col space-y-4 items-center md:hidden xs:hidden">
            <div className="">
            <Icon icon="el:map-marker" width="36" />
            </div>
           <div className=" flex flex-col items-center space-y-4 ">
           <h3>Kigali, Rwanda</h3>
            <h3>KN 20 Ave</h3>
           </div>
            
          </div>
          <div className="text-white flex flex-col space-y-4 items-center xs:text-sm">
            <div className="">
            <h3>Follow Us to Get Updates !</h3>
            </div>
          
            <div className=" flex mt-3 space-x-4 space-y-1 items-center">
            <Icon icon="akar-icons:twitter-fill" width="36" />
              <Icon icon="akar-icons:instagram-fill" width="36" />
              <Icon icon="akar-icons:linkedin-box-fill" width="36" />
              <Icon icon="akar-icons:facebook-fill" width="36" />
          
            </div>
             

          </div>
          <div className="text-white flex flex-col space-y-4 items-center md:hidden xs:hidden">
            <h3>Terms of Services</h3>
            <h3>Privacy Policy</h3>
            <h3>Contact</h3>
            <h3>FAQ</h3>
          </div>
        </div>

        <div className='bg-blue-700'> 

          <h2 className="text-center text-white text-md mt-5 pb-4 sm:text-sm"><span>&copy;</span>All Rights Reserved By Phantmom 2022</h2>

        </div>
      </footer>
    </div>
  )
}

export default Footer;