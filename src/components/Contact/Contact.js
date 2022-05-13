import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendmessage } from '../../redux/actions';
import { Icon } from '@iconify/react';
function Contact() {
  return (
    <div className="bg-white text-blue-600 m-8 md:m-4 md:flex md:flex-col sm:flex sm:flex-col " >
      <div className="text-4xl mb-5 text-center font-sans ">
        <h1 className="text-blue-800 font-bold">Get in touch with us</h1>
      </div>
      <form action="" className="border-solid border-2 mb-5 rounded-lg font-sans flex justify-around md:flex-col md:items-center xs:flex-col xs:items-center ">


        <div className="flex flex-col rounded-none m-3" >
          <div className="text-2xl font-sans mt-3">
            <h2 className="text-blue-700 font-bold  md:text-center xs:text-center">Contact us</h2>
          </div>
          <div className="flex flex-col mr-5 m-3 xs:w-full">


            <div className="flex mt-5">
              <Icon icon="el:map-marker" width="36" />
              <h3 className=" text-xl ml-3 ">Kigali, Rwanda</h3>
            </div>
            <div className="flex mt-5">

              <Icon icon="akar-icons:envelope" width="36" />

              <h2 className=" text-xl ml-3 ">contact@phantom.com</h2>
            </div>
            <div className="flex mr-5 mt-5">
              <Icon icon="fluent:call-24-regular" width="36" />
              <h2 className="text-xl ml-3 ">+250-788-888-887</h2>
            </div>

          </div>
        </div>

        <div className="flex flex-col rounded-none m-3">
          <div className="border-gray-50 flex flex-col">
            <label className=" text-blue-700 font-bold text-base "><span>FullNames</span><span className=" text-red-600 ml-5">*</span></label>
            <div className="">
              <input type="text" name="name" placeholder="Full Names..." className="w-64 p-2  sm:text-sm rounded-md
                border-solid border-2"/>
            </div>
          </div>
          <div className="border-gray-50 flex flex-col">
            <label className=" text-blue-700 font-bold text-base"><span>Email</span><span className="text-red-600 ml-5 text-base">*</span></label>
            <div className="border-gray-50">
              <input type="email" name="email" placeholder="Email..." className="w-64 p-2 rounded-md
                border-solid border-2 "/>
            </div>

          </div>




          <div className=" flex flex-col place-content-center  rounded-none">
            <div className="flex">
              <p className="text-blue-800 font-bold">Leave us a message...</p>
            </div>

            <div className="flex">
              <textarea name="message" placeholder="Type Your Message Here..." id="message" cols="20" rows="10" className="font-sans rounded-md mt-3 h-20 w-full border-solid border-2 Class Properties resize-none"></textarea>
            </div>
            <div className="flex">
              <button type="button" className="mt-3 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs ">Send</button>
            </div>
          </div>

        </div>

      </form>

    </div>
  )
}

export default Contact;