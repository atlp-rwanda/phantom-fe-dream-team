import React from 'react'
import { useState } from "react";
import { updateRoute } from '../../redux/reducers/routesSlice';
import {  useDispatch } from "react-redux";
import routes from '../../assets/routes.png';
import AddnewRoutes from '../RoutesDashboard/AddnewRoutes';
import { Link } from 'react-router-dom';
function UpdateRoute() {
 
    

    const dispatch = useDispatch();
    const [routeno, setRouteno] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [no_of_stations,setNoofstations]=useState("");
  
    const [stations, setStations] = useState("");
    const [price, setPrice] = useState("");
    const [id,setId]= useState(" ")

    const handlesetRouteno=(e)=>{
      setRouteno(e.target.value)
      }

     const handlesetFrom=(e)=>{
        setFrom(e.target.value)
        }
      const handlesetTo=(e)=>{
        setTo(e.target.value)
          }
       const handlesetNoofstations=(e)=>{
          setNoofstations(e.target.value)
            }
        const handlesetStations=(e)=>{
            setStations(e.target.value)
              }
         const handlesetPrice=(e)=> {
            setPrice(e.target.value)
                }

    return (
  
  
      <div className='mt-20 justify-around'> <div className=''>
        <h1 className='text-center mt-[8px] text-2xl text-blue-700 font-Poppins text-3xl sm:text-lg'>Update a Route</h1>
      </div>
        <section className='flex m-10 justify-items-center text-center mt-10 mb-10'>
          <div className='mr-10 w-1/3 sm:hidden'>
            <img alt="photo"
            src={routes}
            />
          </div>
          <div className=' flex flex-col  border-b-2 border-blue-400 p-10  w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
            <div className="flex ">
              <label className=" text-blue-700 text-lg  sm:text-sm "><span>Route no</span></label>
              <div className="ml-16">
                <input type="text" name="name" placeholder="504" value={routeno}
                  onChange={(event) => {
                    setRouteno(event.target.value);
                  }}
                className="border-2 border-blue-500 ml-5  rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2 ml-0'"/>
              </div>
            </div>
            <div className="flex  mt-5">
              <label className=" text-blue-700 text-lg font-bold  sm:text-sm"><span>From</span></label>
              <div className="ml-24">
                <input type="text" name="name" placeholder="Nyabugogo" value={from}
                 onChange={(event) => {
                  setFrom(event.target.value);
                }}
                className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
              </div>
            </div>
            <div className="flex mt-5 ">
              <label className=" text-blue-700  text-lg font-bold   sm:text-sm "><span>To</span></label>
              <div className="ml-32">
                <input type="text" name="name" placeholder="Remera" value={to}
               onChange={(event) => {
                setTo(event.target.value);
              }}
                className="border-2 border-blue-500  ml-5 rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2 "/>
              </div>
            </div>
            <div className=" flex mt-5 ">
              <label className=" text-blue-700  text-lg font-bold  sm:text-sm" ><span>No of stations</span></label>
              <div className="ml-6">
                <input type="text" name="name" placeholder="10" value={no_of_stations}
                 onChange={(event) => {
                  setNoofstations(event.target.value);
                }}
                
                className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2 "/>
              </div>
            </div>
            <div className="flex mt-5 ">
              <label className=" text-blue-700 font-bold text-base w-24   sm:text-sm"><span>Stations</span></label>
              <div className="ml-20">
                <input type="text" name="name" placeholder="kanogo, Rwandex, Sonatube" value={stations}
                 onChange={(event) => {
                  setStations(event.target.value);
                }}
                className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
              </div>
            </div>
            <div className=" flex mt-5 ">
              <label className=" text-blue-700 font-bold text-base w-24  sm:text-sm "><span>Price</span></label>
              <div className="ml-28">
                <input type="text" name="name" placeholder="325"  value={price}
                 onChange={(event) => {
                  setPrice(event.target.value);
                }}
                className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
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
                id,
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
       <Link to = "/dashboard/Routes"><button>Cancel</button></Link>
       </div>
  
        </div>
  
      </div>
    )
}

export default UpdateRoute;