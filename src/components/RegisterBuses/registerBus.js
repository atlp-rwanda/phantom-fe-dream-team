import React, { useState } from "react";
import SuccefullPopup from '../succesfull';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import ErrorPopup from "../error";
import Buses from "./buses";
import { addBus } from "../../redux/actions";
function AddBus() {
  const dispatch = useDispatch();
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);
  const [load,setLoad] = useState(false)
  const [Role, setRole] = useState('');
  const [Description, setDescription] = useState('');
  const [seat, setSeat] = useState('');

  function submitForm() {
    if (Role == '' || Description == '') {
      document.getElementById("error").innerHTML = 'Bus data must be filled !!!';
    }
    else {
      setLoad(true)
      const bus = {plate:Role, busType:Description, seat:seat};
     dispatch(addBus(bus))
     setTimeout(() => {
      const error = localStorage.getItem("error");
      if(error!="null"){
        setLoad(false)
        setError(true)
      }else{
        setLoad(false)
        setSucceed(true)
      }
    }, 1000);
    }
  }
  function close() {
    setSucceed(false)
    window.location.assign("../Buses")
  }
  if (succeed == true) {
    setTimeout(() => {
      setSucceed(false)
      window.location.assign("../Buses")
    }, "5000")
  }

  return (

    <>

      <div className="opacity-80 blur-[1px]">
        <Buses />
      </div>
      <div className=" w-[500px] h-[440px] md: block justify-start sm:text-sm bg-gray-200  absolute right-[400px] top-[80px] sm:right-0 border-2 ring-2 ring-blue-600 ring-inset">
      <h2 className="mt-8 ml-8 text-lg text-blue-900">Register new bus</h2>
        <div className="flex pt-8 sm:text-sm sm:flex-col sm:ml-36">
          <div className="flex-col ml-12 font-bold text-black text-lg">
          </div>
          <div className="pl-4">
            <div className='m-2 '>
              <input type="text" id='' placeholder='Enter bus plate' value={Role}
                onChange={(e) => setRole(e.target.value)}
                className='border border-solid-2 border-blue-600 px-2 rounded' />
                <br/>
                 <input type="text" id='' placeholder='Enter bus type' value={Description}
                onChange={(e) => setDescription(e.target.value)}
                className='border border-solid-2 border-blue-600 px-2 mt-2 rounded' />
                <br/>
                 <input type="text" id='' placeholder='Enter N seats' value={seat}
                onChange={(e) => setSeat(e.target.value)}
                className='border border-solid-2 border-blue-600 px-2 mt-2 rounded' />
            </div>
          </div>
        </div>
        <p id='error' className="not-italic subpixel-antialiased text-sm font-sans text-ml text-red-500 text-center font-bold"></p>
        <div className="flex mt-12 ml-16">
          <div className="pr-9">


            <button className=" ml-0 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-4 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
              <Link to={"/Dashboard/Buses"} >
                Cancel
              </Link>

            </button>
          </div>
          <div>
            {!load &&
            <button onClick={() => submitForm()} className=" lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-6 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">Save</button>
            }{load &&
              <button  className='px-4 py-1 rounded-lg bg-blue-100 text-blue-900 border-2 border-blue-600  hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'> 
              <svg role="status" class="inline w-4 h-4 mr-2 text-gray-900 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
              </svg>
              Loading...
          </button>
              }
            </div>
        </div>


      </div>

      <SuccefullPopup trigger={succeed}>
        <button onClick={() => close()} className="absolute top-0 right-2">X</button>
        <h3 className="px-10">Success</h3>
      </SuccefullPopup>
      <ErrorPopup trigger={error}>
        <button onClick={() => setError(false)} className="absolute top-0 right-2">X</button>
        <h3 className="px-10">An error occured</h3>
      </ErrorPopup>

    </>
  )
}

export default AddBus;