import React from 'react'
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import { addRoute } from '../../redux/reducers/routesSlice';
import {  useDispatch } from "react-redux";
import routes from '../../assets/routes.png';
import TopNavbar from '../Dashboard/TopNavbar';
import SuccefullPopup from '../Logout/success'
import { Link } from 'react-router-dom';
import{useLoader} from "../useLoader";
import SkeletonUI from '../skeletonUI';
function AddnewRoutes() {
  const {loading}=useLoader();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [routeno, setRouteno] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [no_of_stations,setNoofstations]=useState("");

  const [stations, setStations] = useState("");
  const [price, setPrice] = useState("");



  //success popup
  const [succeed, setSucceed] = useState(false);
   
  function close(){
    setSucceed(false)
  }
  if (succeed==true){
    setTimeout(() => {
      setSucceed(false)
      navigate('/dashboard/Routes')
    }, "2000")
  }

  const save = Boolean(routeno)&& Boolean(from)&&Boolean(to)&&Boolean( no_of_stations)&&Boolean(stations)&&Boolean(stations)&&Boolean( price)



  return (

<>
<TopNavbar goto={e=>window.location.assign('/dashboard/Routes/Add')}/>




       <SuccefullPopup trigger={succeed}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 className="px-10">Route Created</h3>
        </SuccefullPopup> 

        {loading && <SkeletonUI />}
    {!loading && (

    <div className='mt-20 justify-around '> <div className=''>
      <h1 className='text-center mt-[8px] text-2xl text-blue-700 font-Poppins text-3xl sm:text-lg'>Add a New Route</h1>
     </div>
      <section className='flex m-10 justify-items-center text-center mt-10 mb-10 '>
        <div className='mr-10 w-1/3  sm:hidden'>
          <img alt="photo"
          src={routes}
          />
        </div>
        <div className=' flex flex-col  border-b-2 border-blue-400 p-10  w-[500px]  2xl:shadow-b '>
          <div className=" flex  ">
            <label className=" text-blue-700 text-lg  sm:text-sm "><span>Route no </span></label>
            <div className="ml-16 sm:ml-12  ">
              <input type="text" name="name" placeholder="504" value={routeno}
              
                onChange={(event) => {
                  setRouteno(event.target.value);
                }}
                className='border-2 border-blue-500 ml-5  rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2 ml-0'
              />
            </div>
          </div>
          <div className=" flex  mt-5  ">
            <label className=" text-blue-700 text-lg font-bold  sm:text-sm  "><span>From</span></label>
            <div className="ml-24 sm:ml-12">
              <input type="text" name="name" placeholder="Nyabugogo" 
               onChange={(event) => {
                setFrom(event.target.value);
              }}
              className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
            </div>
          </div>
          <div className="flex mt-5">
            <label className=" text-blue-700  text-lg font-bold  sm:text-sm "><span>To</span></label>
            <div className="ml-32 sm:ml-12">
              <input type="text" name="name" placeholder="Remera" 
             onChange={(event) => {
              setTo(event.target.value);
            }}
              className="border-2 border-blue-500  ml-5 rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none  sm:w-1/2"/>
            </div>
          </div>
          <div className=" flex mt-5 ">
            <label className=" text-blue-700  text-lg font-bold  sm:text-sm "><span>No of stations</span></label>
            <div className="ml-6 sm:ml-0">
              <input type="text" name="name" placeholder="10"
               onChange={(event) => {
                setNoofstations(event.target.value);
              }}
              
              className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
            </div>
          </div>
          <div className=" flex  mt-5 ">
            <label className=" text-blue-700 text-lg font-bold sm:text-sm  "><span>Stations</span></label>
            <div className="ml-20 sm:ml-10">
              <input type="text" name="name" placeholder="kanogo, Rwandex, Sonatube"
               onChange={(event) => {
                setStations(event.target.value);
              }}
              className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none  sm:w-1/2"/>
            </div>
          </div>
          <div className=" flex mt-5  ">
            <label className=" text-blue-700 text-lg font-bold sm:text-sm  "><span>Price</span></label>
            <div className="ml-28 sm:ml-12">
              <input type="text" name="name" placeholder="325" 
               onChange={(event) => {
                setPrice(event.target.value);
              }}
              className="border-2 border-blue-500   rounded-lg py-2 px-8 shadow-b ml-4 focus:outline-none sm:w-1/2"/>
            </div>
          </div>
        </div>


      </section>
      <div className='flex justify-center'>
        <div className='mr-10 bg-blue-700 font-bold text-white px-8 py-1 rounded-md hover:bg-white hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-500 sm:px-6 py-1  text-ms mb-10 '>
        <button
         onClick={() => {
          dispatch(
            addRoute({
              routeno,
              from,
              to,
              no_of_stations,
              stations,
              price
            }),
            setSucceed(true)
          
          );
        }}
       disabled = {!save}
      >
       
       Create</button>
        </div>
     <div className='mr-10 bg-blue-700 font-bold text-white px-8 py-1 rounded-md hover:bg-white hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-500 sm:px-6 py-1  text-ms  mb-10' >

     <Link to = '/dashboard/Routes'>
     <button>Cancel</button>
     </Link>
     </div>

      </div>
    

    </div>
    )}
    </>
  )
}

export default AddnewRoutes;