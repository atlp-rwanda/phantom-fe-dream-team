import React, { useState } from "react";
import SuccefullPopup from '../succesfull';
import { Link } from "react-router-dom";
import ErrorPopup from "../error";
import Buses from "./buses";
function AddBus() {
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);
  const [Role, setRole] = useState('');
  const [Description, setDescription] = useState('');
  const [seat, setSeat] = useState('');

  function submitForm() {
    if (Role == '' || Description == '') {
      document.getElementById("error").innerHTML = 'Role and Role description must filled !!!';
    }
    else {
      const role = {plate:Role, busType:Description, seat:seat};
      var loggedin =  localStorage.getItem("auth-token")
      fetch('https://phantom-be.herokuapp.com/api/v1/buses', 
    { method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
        body: JSON.stringify(role)
      }).then((res) => {
        console.log(res)
        // window.location.assign("../buses")
        // setSucceed(true);
      })
    }
  }
  function close() {
    setSucceed(false)
    window.location.reload()
  }
  if (succeed == true) {
    setTimeout(() => {
      setSucceed(false)
      window.location.reload()
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
            <button onClick={() => submitForm()} className=" lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-6 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">Save</button>
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