import React from 'react'
import { Icon } from '@iconify/react';
function Contact() {
  return (
    <div className="bg-blue-600" >
      <form action="" className="bg-blue-600 font-sans">
        <div className="text-4xl text-white text-center ">
          <h1 className="">Get Quick Info Now!</h1>
        </div>

        <div className="flex justify-around mt-10 rounded-none text-white bg-blue-600 lg:ml-0 md:ml-8 sm:ml-8" >
          <div className="flex mr-5">
            <Icon icon="fluent:call-24-regular" width="36" />
            <h2 className=" text-white text-xl ml-3 ">+250 788 123 123 123</h2>
          </div>
          <div className="flex">

            <Icon icon="akar-icons:envelope" width="36" />

            <h2 className="text-white text-xl ml-3 ">phantom@andela.com</h2>
          </div>

        </div>

        <div className="flex justify-around rounded-none text-white bg-blue-600 lg:ml-0 md:ml-8 sm:ml-8">
          <div className="border-gray-50 flex flex-col">
            <label for="name" className="text-white text-base "><span>FullNames</span><span className="text-white text-red-600 ml-5">*</span></label>
            <div className="">
              <input type="text" name="name" placeholder="Full Names..." className="w-64 p-4  sm:text-sm rounded-none
                order-solid border-2 text-white bg-blue-600"/>
            </div>
          </div>
          <div className="border-gray-50 flex flex-col">
            <label for="email" className="text-white text-base"><span>Email</span><span className="text-red-600 ml-5 text-base">*</span></label>
            <div className="border-gray-50">
              <input type="email" name="email" placeholder="Email..." className="w-64 p-4 rounded-none
                order-solid border-2 text-white bg-blue-600"/>
            </div>
        
          </div>
       
        </div>


        <div className="grid grid-cols-1 gap-4 place-content-center w-2/3 rounded-none text-white bg-blue-600 ml-56">
          <div className="text-white flex">
            <p className="">Leave us a message...</p>
          </div>

          <div className="text-white">
            <textarea name="message" placeholder="Type Your Message Here..." id="message" cols="20" rows="10" className="font-sans rounded-none mt-3 w-full border-solid border-2 text-white bg-blue-600"></textarea>
          </div>
 
        </div>
        <div className="flex justify-center">
          <button type="button" className="font-sans rounded-none mt-3 p-4 w-2/3 border-solid border-2 text-blue-600 bg-white">Submit</button>
        </div>
        
      </form>

    </div>
  )
}

export default Contact;