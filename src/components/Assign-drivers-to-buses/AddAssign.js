import React from 'react'
import Logout from '../Logout/logout'
import { Link } from 'react-router-dom';
import { useState } from "react";
import {  useDispatch } from "react-redux";
import SuccefullPopup from '../Logout/success';
import {useNavigate } from 'react-router-dom';
import buses from '../RegisterBuses/database.json'

function Assign() {

    
    function add(Driver,Plate) {
        console.log("add")
        fetch('http://localhost:8000/assignDrivers', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({Driver,Plate})
      }).then(() => {
        window.location.assign("./")
        setSucceed(true);
      })
    }

    
    const dispatch = useDispatch();
    const [Plate, setBusPlate] = useState("");
    const [Driver, setBusDriver] = useState("");
    const navigate = useNavigate();
      //success popup
   const [succeed, setSucceed] = useState(false);
   
   function close(){
     setSucceed(false)
   }
   if (succeed==true){
     setTimeout(() => {
       setSucceed(false)
       navigate('/dashboard/Assign')
     }, "2000")
   }
 
   const getDataform=()=>{
    const data=localStorage.getItem('register')
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}



const [users,setUsers]=useState(getDataform())

    const Drivers = users.map((bus) => {
        return (
            <option>
            {bus.firstname}
            {" "}
            {bus.lastname}
            
            </option>
            
        )
    })

        const Buses = buses.map((bus) => {
            return (
                <option>
                {bus.plateNo}
                </option>
                
            )
        })

                return (
                    <>

                    <Logout />
                        <SuccefullPopup trigger={succeed}>
                            <button onClick={()=>close()} className="absolute top-0 right-2">X</button>               
                            <h3 className="px-10">Assign Created</h3>
                        </SuccefullPopup> 
                     
                    
                        <h1 className='text-center mt-[10px] text-2xl text-blue-700 font-Poppins'>Assign Driver to Buses</h1>

                            <div className='flex justify-center ml-auto text-center mt-10 mb-10  lg:flex md:flex sm:flex-col items-center sm:mt-[-20px]'>
                                <div className='w-1/3 mt-[70px]'>
                                  {/*<img src={user} alt='user' className='w-[60%] sm:w-[100%]'/> */} 
                                </div>
                                <div className='w-[500px] xs:w-[300px] 2xl:shadow-b sm:w-[300px] md:w-[300px] lg:w-[300px]'>
                                
                                
                                    <div className='flex'>
                                        <label htmlFor="role" className="text-blue-700 text-xl mt-6 sm:sr-only">Drivers:</label>
                                            <select
                                                onChange={(event) => {
                                                    setBusPlate(event.target.value);
                                                }}
                                                className="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[75px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px] sm:ml-[15px]">
                                                <option
                                                defaultValue>Drivers</option>
                                                {Drivers}
                                            
                                            </select>
                                    </div>

                                            <div className='flex'>
                                                <label htmlFor="role" className="text-blue-700 text-xl mt-6 sm:sr-only">Buses:</label>
                                                <select 
                                                onChange={(event) => {
                                                    setBusDriver(event.target.value);
                                                }}
                                                className="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[75px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px] sm:ml-[15px]">
                                                <option
                                                defaultValue>Buses</option>
                                                {Buses}
                                                
                                                </select>
                                            </div> 

                                        </div>
                                    </div>
                                            <div className='flex justify-center mb-10'>
                                                <button
                                                    onClick={() => 
                                                        add(
                                                            Plate,
                                                            Driver,
                                                        )  
                                                        
                                                    }
                                                    
                                                    className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' > {" "} Assign</button>
                                                    <Link to="/dashboard/Assign">
                                                <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-5'>Cancel</button>
                                                </Link>
                                        </div>
                    </>
  )
}

export default Assign