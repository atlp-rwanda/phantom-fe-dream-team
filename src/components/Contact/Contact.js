import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendmessage } from '../../redux/actions';
import { Icon } from '@iconify/react';
function Contact() {
  return (
    <div className="bg-white text-blue-600 m-2 md:m-4 md:flex md:flex-col sm:flex sm:flex-col " >
      <div className="text-4xl mb-5 mt-10 text-center">
        <h1 className="text-blue-500 font-bold">Get in touch with us</h1>
      </div>
      <form action="" className="border-solid border-2 mb-10 mx-10 my-10 rounded-lg flex justify-between md:flex-col md:items-center md:mx-0 md:my-0 xs:flex-col xs:items-center ">


        <div className="flex flex-col rounded-none ml-2 justify-items-start" >
         
            <h2 className="text-blue-700 font-bold mt-10 ml-5 tracking-wide md:text-center xs:text-center ">Contact us</h2>
       
          <div className="flex flex-col mr-0 m-1 xs:w-full">


            <div className="flex ml-5 mt-10">
            <Icon icon="clarity:map-marker-line" width="30" />
              <h2 className=" text-blue-700 font-light ml-5  tracking-wide md:text-center xs:text-center ">Kigali, Rwanda</h2>
            </div>
            <div className="flex ml-5  mt-5">

            <Icon icon="clarity:email-line" width="30" />

              <h2 className=" text-blue-700 font-light ml-5  tracking-wide md:text-center xs:text-center ">contact@phantom.com</h2>
            </div>
            <div className="flex ml-5 mt-5">
              <Icon icon="fluent:call-24-regular" width="30" />
              <h2 className="text-blue-700 ml-5  ffont-light tracking-wide md:text-center xs:text-center ">+250-788-888-887</h2>
            </div>

          </div>
        </div>

        <div className="w-1/3 xs:w-[300px]  sm:w-[300px] md:w-[300px] lg:w-[300px] w-64 sm:border-none md:2xl-hidden md:flex-col md:items-center xs:flex-col xs:items-center ">
          <div className="border-gray-50 flex flex-col">
            <label className=" text-blue-700 font-bold text-base mt-5 "><span>Names</span><span className=" text-red-600 ml-5">*</span></label>
            
              <input type="text" name="name" placeholder="Full Names..." className="w-3/3 px-4 py-3 mt-5 rounded-lg bg-white mt-2 border-blue-500 border-2 h-10 focus:border-blue-500 sm:w-[100%] focus:bg-white focus:outline-none"/>
           
          </div>
          <div className="border-gray-50 flex flex-col">
            <label className=" text-blue-700 mt-5 font-bold text-base"><span>E-mail</span><span className="text-red-600 ml-5 text-base">*</span></label>
            <div className="border-gray-50">
              <input type="email" name="email" placeholder="Email..." className="w-3/3 px-4 py-3 mt-5 rounded-lg bg-white mt-2 border-blue-500 border-2 h-10 focus:border-blue-500 sm:w-[100%] focus:bg-white focus:outline-none"/>
            </div>

          </div>




          <div className=" flex flex-col place-content-center  rounded-none">
            <div className="flex">
              <p className="text-blue-800 mt-5 font-bold">Message</p>
            </div>

            <div className="flex">
              <textarea name="message" placeholder="Type Your Message Here..." id="message" cols="22" rows="10" className="rounded-md mt-5 mt-3 h-20 w-3/3 sm:w-[100%] border-blue-500 border-2 Class Properties resize-none"></textarea>
            </div>
            <div className="flex">
              <button type="button" className="mt-5 mb-10 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs ">Send</button>
            </div>
          </div>

        </div>

      </form>

    </div>
  )
}

export default Contact;