import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import buses from '../../assets/buses.png'
import LOGOUT from '../Logout/logout'
import { useDispatch} from "react-redux";
import { addBus} from "../../redux/reducers/busesReducer"
import { nanoid } from '@reduxjs/toolkit';
import SuccefullPopup from '../Logout/success'
import {useNavigate } from 'react-router-dom';
export default function register() {

const navigate = useNavigate()
const dispatch = useDispatch()

const [plateNo,setPlateNo]=useState('')
const [routeNo,setRouteNo]=useState('')
const [busType,setBusType]=useState('')
const [seats,setSeats]=useState('')


//onsubmit
const handleOnSubmit = () => {
  if (plateNo && routeNo && busType && seats) {
      dispatch(
        addBus({
            id:nanoid(),
            plateNo,
            routeNo, 
            busType,
            seats})
      )
      setPlateNo('')
      setRouteNo('')
      setBusType('')
      setSeats('')
      setSucceed(true)
  }
}
//check all input field
const canSave = Boolean(plateNo) && Boolean(routeNo) && Boolean(busType) && Boolean(seats)

  //success popup
  const [succeed, setSucceed] = useState(false);
   
  function close(){
    setSucceed(false)
  }
  if (succeed==true){
    setTimeout(() => {
      setSucceed(false)
      navigate('/dashboard/Buses')
    }, "2000")
  }

  return (
    <>
    <LOGOUT/>
    <SuccefullPopup trigger={succeed}>
        <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
        <h3 className="px-10">New Bus Added</h3>
        </SuccefullPopup> 
     <h1 className='text-center mt-[10px] text-2xl text-blue-700 font-Poppins'>Add a new Bus</h1>

    <div className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex sm:flex-col items-center sm:mt-[-20px]'>
      <div className='w-1/3 mt-[70px]'>
     <img src={buses} alt='user' className='w-[60%] sm:w-[100%]'/>
     </div>
     <div className='w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
       <div className='flex sm:flex-col'>
         <label htmlFor="plate_no" className="text-blue-700 text-xl mt-[55px] sm:sr-only">Plate No:</label>
         <input 
         type='text' 
         placeholder='Plate Number' 
         className='border-2 border-blue-700  mt-[50px] rounded-lg py-1 px-2 shadow-b ml-4 focus:outline-none sm:w-[250px]'
         value={plateNo}
         onChange={ (e) => setPlateNo(e.target.value)}
         />
       </div>

       <div className='flex'>
         <label htmlFor="route_no" className="text-blue-700 text-xl mt-6 sm:sr-only">Route No:</label>
         <input 
         type='text' 
         placeholder='Route Number' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-2 focus:outline-none sm:w-[250px] sm:ml-4'
         value={routeNo}
         onChange={ (e) => setRouteNo(e.target.value)}
         />
       </div>
       <div className='flex sm:justify-center'>
         <label htmlFor="bus_type" className="text-blue-700 text-xl mt-6 sm:sr-only">Bus Type:</label>
         <input 
         type='text' 
         placeholder='Bus Type' 
         className='border-2 border-blue-700  mt-5 rounded-lg py-1 px-2 shadow-b ml-[10px] focus:outline-none sm:w-[250px] sm:ml-[-20px]'
         value={busType}
         onChange={ (e) => setBusType(e.target.value)}
         />
       </div>

       <div className='flex '>
       <label htmlFor="seats" className="text-blue-700 text-xl mt-6 sm:sr-only">Seat:</label>
         <input 
         type='text' 
         placeholder='Number of Seats' 
        className='border-2 border-blue-700  mb-10 mt-5 rounded-lg py-1 px-2 shadow-b ml-[54px] focus:outline-none sm:w-[250px] sm:ml-[-20px] sm:ml-[15px]'
        value={seats}
        onChange={ (e) => setSeats(e.target.value)}
         />
       </div>
 
         </div>
     </div>
     <div className='flex justify-center mb-10'>
     <button 
     className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' 
     onClick={handleOnSubmit}
     disabled={!canSave}
     >Create
     </button>
     <Link to="/dashboard/Buses">
     <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-5'>Cancel</button>
     </Link>
     </div>
    </>
)
}