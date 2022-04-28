import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { sendmessage } from '../../redux/actions';
import { Icon } from '@iconify/react';
function Contact() {
  // const message = useSelector(state => state.contactReducer);
  // const dispatch = useDispatch();
  // console.log(message);

  return (
    <div className="bg-white text-blue-600 m-8 md:m-4 sm:m-4" >
         <div className="text-4xl mb-5 text-center font-sans ">
          <h1 className="">Get in touch with us</h1>
        </div>
      <form action="" className="  border-solid border-2 mb-5 rounded font-sans flex justify-around">
     

        <div className="flex flex-col rounded-none mt-3" >
          <div className="text-2xl font-sans">
            <h2 className="">Contact us</h2>
          </div>
          <div className="flex flex-col mr-5 m-3">


            <div className="flex mt-5">
              <Icon icon="el:map-marker" width="36" />
              <h3 className=" text-xl ml-3 ">kigali,Rwanda</h3>
            </div>
            <div className="flex mt-5">

              <Icon icon="akar-icons:envelope" width="36" />

              <h2 className=" text-xl ml-3 ">contact@phathom.com</h2>
            </div>
            <div className="flex mr-5 mt-5">
              <Icon icon="fluent:call-24-regular" width="36" />
              <h2 className="text-xl ml-3 ">+250-788-888-887</h2>
            </div>

          </div>
        </div>

        <div className="flex flex-col rounded-none m-3">
          <div className="border-gray-50 flex flex-col">
            <label  className=" text-base "><span>FullNames</span><span className="text-white text-red-600 ml-5">*</span></label>
            <div className="">
              <input type="text" name="name" placeholder="Full Names..." className="w-64 p-2  sm:text-sm rounded-none
                border-solid border-2 sm:w-32"/>
            </div>
          </div>
          <div className="border-gray-50 flex flex-col">
            <label  className=" text-base"><span>Email</span><span className="text-red-600 ml-5 text-base">*</span></label>
            <div className="border-gray-50">
              <input type="email" name="email" placeholder="Email..." className="w-64 p-2 rounded-none
                border-solid border-2  sm:w-32"/>
            </div>

          </div>




          <div className=" flex flex-col place-content-center  rounded-none">
            <div className="flex">
              <p className="">Leave us a message...</p>
            </div>

            <div className="flex">
              <textarea name="message" placeholder="Type Your Message Here..." id="message" cols="20" rows="10" className="font-sans rounded-none mt-3 h-20 w-full border-solid border-2  sm:w-32"></textarea>
            </div>
            <div className="flex">
            <button type="button" onClick={() => dispatch(sendmessage())} className="font-sans rounded-none mt-3 px-8 py-2 rounded-lg mb-5 text-white bg-blue-600 ">Send</button>
          </div>
          </div>
          
        </div>

      </form>

    </div>
  )
}

export default Contact;