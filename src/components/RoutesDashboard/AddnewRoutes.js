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
import Logout from '../Logout/logout';
function AddnewRoutes() {
  const {loading}=useLoader();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [code,setCode]=useState("");

  const [distance, setDistance] = useState("");
  const [Latitude,setLatitude] = useState("");
  const [longitude,setLongitude]= useState("");

  function submitForm() {
    if (From == '' || To == '') {
      document.getElementById("error").innerHTML = 'Role and Role description must filled !!!';
    }

    //


    else {
      
      const role = { origin:From, destination:To, distance:distance, code:code,latitude:Latitude,longitude:longitude};
      var loggedin =  localStorage.getItem("auth-token")
      fetch('http://localhost:3002/api/v1/routes', 
    { method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
        body: JSON.stringify(role)
      }).then((res) => {
        console.log(res)
        window.location.assign("../routes")
        setSucceed(true);
      })
    }
  }


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

  const save = Boolean(longitude)&& Boolean(From)&&Boolean(To)&&Boolean( code)&&Boolean(Latitude)&&Boolean( distance)



  return (

<>
 <Logout/>




       <SuccefullPopup trigger={succeed}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 className="px-10">Route Created</h3>
        </SuccefullPopup> 

        {loading && <SkeletonUI />}
    {!loading && (

    <div className='mt-20 justify-around '> <div className=''>
      <h1 className='text-center mt-[8px] text-2xl text-blue-700 font-Poppins text-3xl sm:text-lg'>Add a New Route</h1>
     </div>
      <section className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex sm:flex-col mb-5 items-center sm:mt-[-20px] '>
        <div className='w-1/3 mt-[70px]'>
          <img alt="photo" className='w-[60%] sm:w-[100%]'
          src={routes}
          />
        </div>
        <div className=' w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px] sm:pb-5 pb-5 '>
          <div className=" flex   ">
            <label className=" text-blue-700 text-xl mt-[55px] sm:sr-only "><span>longitude </span></label>
            <div className="ml-16  w-24 sm:ml-1 w-8  ">
              <input type="text" name="name" placeholder="504" value={longitude}
              
                onChange={(event) => {
                  setLongitude(event.target.value);
                }}
                className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
              />
              
            </div>
          </div>
          <div className=" flex   ">
            <label className=" text-blue-700 text-xl mt-[55px] sm:sr-only "><span>latitude </span></label>
            <div className="ml-16  w-24 sm:ml-1 w-8  ">
              <input type="text" name="name" placeholder="504" value={Latitude}
              
                onChange={(event) => {
                  setLatitude(event.target.value);
                }}
                className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
              />
              
            </div>
          </div>
          <div className=" flex   ">
            <label className=" text-blue-700 text-xl mt-6 sm:sr-only "><span>From</span></label>
            <div className="ml-28  sm:ml-1 w-8">
              <input type="text" name="name" placeholder="Nyabugogo" value={From}
               onChange={(event) => {
                setFrom(event.target.value);
              }}
              className="border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-2 focus:outline-none sm:w-[250px] sm:ml-4"/>
            </div>
          </div>
          <div className="flex sm:justify-center">
            <label className=" text-blue-700 text-xl mt-6 sm:sr-only "><span>To</span></label>
            <div className="ml-[134px]  sm:ml-1 w-8">
              <input type="text" name="name" placeholder="Remera" value={To}
             onChange={(event) => {
              setTo(event.target.value);
            }}
              className="border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[10px] focus:outline-none sm:w-[250px] sm:ml-[-20px]"/>
            </div>
          </div>
          <div className=" flex sm:justify-center ">
            <label className="text-blue-700 text-xl mt-6 sm:sr-only"><span>Code</span></label>
            <div className="ml-28  sm:ml-1 w-8">
              <input type="text" name="name" placeholder="10" value={code}
               onChange={(event) => {
                setCode(event.target.value);
              }}
              
              className="border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[10px] focus:outline-none sm:w-[250px] sm:ml-[-20px]"/>
            </div>
   
          </div>
          <div className=" flex sm:justify-center  ">
            <label className=" text-blue-700 text-xl mt-6 sm:sr-only  "><span>distance</span></label>
            <div className="ml-28  sm:ml-1 w-8">
              <input type="text" name="name" placeholder="325"  value={distance}
               onChange={(event) => {
                setDistance(event.target.value);
              }}
              className="border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[10px] focus:outline-none sm:w-[250px] sm:ml-[-20px]"/>
            </div>
          </div>
        </div>


      </section>
      <div className='flex justify-center'>
        <div className='mr-10 bg-blue-700 font-bold text-white px-8 py-1 rounded-md hover:bg-white hover:text-blue-700 hover:border-solid hover:border-2 hover:border-blue-500 sm:px-6 py-1  text-ms mb-10 '>
        {/* <button
         onClick={() => {
          dispatch(
            addRoute({
              routeNo,
              from,
              to,
              code,
              routeslug,
              distance
            }),
            setSucceed(true)
          
          );
        }}
       disabled = {!save}
      >
       
       Create</button> */}
       <button onClick={() => submitForm()} className=" lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-6 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">Create</button>

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