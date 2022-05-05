import React from 'react'
import { useState } from "react";
import { updateRoute } from '../../redux/reducers/routesSlice';
import {  useDispatch } from "react-redux";
import routes from '../images/routes.png';
function UpdateRoute() {
 
    

    const dispatch = useDispatch();
    const [routeno, setRouteno] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [no_of_stations,setNoofstations]=useState("");
  
    const [stations, setStations] = useState("");
    const [price, setPrice] = useState("");
    return (
  
  
      <div className='mt-20 justify-around'> <div className=''>
        <h1>Update route</h1>
      </div>
        <section className='flex m-10 justify-items-center'>
          <div className='mr-20'>
            <img alt="photo"
            src={routes}
            />
          </div>
          <div className=' flex flex-col border-solid border-r-2 border-b-2 border-blue-500 p-10'>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold w-24 text-base "><span>Route no</span></label>
              <div className="">
                <input type="text" name="name" placeholder={routeno} 
                  onChange={(event) => {
                    setRouteno(event.target.value);
                  }}
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold text-base w-24 "><span>From</span></label>
              <div className="">
                <input type="text" name="name" placeholder={from} 
                 onChange={(event) => {
                  setFrom(event.target.value);
                }}
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold text-base w-24 "><span>To</span></label>
              <div className="">
                <input type="text" name="name" placeholder={to}
               onChange={(event) => {
                setTo(event.target.value);
              }}
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold text-base w-24"><span>No of stations</span></label>
              <div className="">
                <input type="text" name="name" placeholder={no_of_stations}
                 onChange={(event) => {
                  setNoofstations(event.target.value);
                }}
                
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold text-base w-24 "><span>Stations</span></label>
              <div className="">
                <input type="text" name="name" placeholder={stations}
                 onChange={(event) => {
                  setStations(event.target.value);
                }}
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
            <div className="border-gray-50 flex ">
              <label className=" text-blue-700 font-bold text-base w-24 "><span>Price</span></label>
              <div className="">
                <input type="text" name="name" placeholder={price} 
                 onChange={(event) => {
                  setPrice(event.target.value);
                }}
                className="w-64 p-2  sm:text-sm rounded-md
          border-solid border-2"/>
              </div>
            </div>
          </div>
  
  
        </section>
        <div className='flex justify-center'>
          <div className='mr-10 bg-blue-700 font-bold text-white px-8 py-1 rounded-md hover:bg-white hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-500'>
          <button
           onClick={() => {
            dispatch(
              updateRoute({
                routeno,
                from,
                to,
                no_of_stations,
                stations,
                price
              })
            );
          }}
        >
          {" "}      
          Update</button>
          </div>
       <div className='mr-10 bg-blue-700 font-bold text-white px-8 py-1 rounded-md hover:bg-white hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-500' >
       <button>Cancel</button>
       </div>
  
        </div>
  
      </div>
    )
}

export default UpdateRoute;