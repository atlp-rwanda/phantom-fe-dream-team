import React, { useState, useEffect } from "react";
import Logout from '../Logout/logout'
import { Link } from 'react-router-dom';
import {  useDispatch } from "react-redux";
import SuccefullPopup from '../Logout/success';
import {useNavigate } from 'react-router-dom';
import {backendUrl} from "../../utils/Api.js"

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
    const [Plate, setBusPlate] = useState([]);
    const [Driver, setBusDriver] = useState([]);
    const [loading1,setLoading1]=useState(false)
    const navigate = useNavigate();
      //success popup
   const [succeed, setSucceed] = useState(false);
 const loggedin =  localStorage.getItem("auth-token")

   useEffect(() => {
    fetch(`${backendUrl}users`, {
        method: "GET",
        headers: { "Content-Type": "application/json","Authorization": `Bearer ${loggedin}`},
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          console.log(result.data)
          setBusDriver(result.data)
        }),
        fetch(backendUrl+'driverstobuses/all/unassigned/drivers', 
{ method: 'GET', 
headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,}})
  .then(res => {
    if (!res.ok) { // get the error from server
      throw Error('could not fetch the data for that resource');
    }
    return res.json();
  })
  .then(data => {
    setBusPlate(data.data.buses);
    setLoading(false);
    setError(null);
  }).catch(err => {
    // cathes Network/connection error
    setLoading(false);
    setError(err.message);
  })     
}, []);
   function close(){
     setSucceed(false)
   }
   if (succeed==true){
     setTimeout(() => {
       setSucceed(false)
       navigate('/dashboard/Assign')
     }, "2000")
   }
 
   const AssignDriver=()=>{
    const driver=document.getElementById('Driver').value 
    const bus=document.getElementById('Bus').value 
    console.log(driver,"and",bus)
    if(driver!="Drivers" && bus!="Buses"){
        let DRV=Driver.find(o => o.names === driver);
        let Bs = Plate.find(o => o.plate === bus);
       const i=DRV.id
       const j=Bs.id
       setLoading1(true)
        fetch(backendUrl+`driverstobuses/assign/driver/${i}/bus/${j}`, 
    { method: 'POST', 
    headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,}})
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
      })
      .then(data => {
      }).catch(err => {
        // cathes Network/connection error
        setError(err.message);
      })
      setTimeout(() => {
        setLoading1(false)
        window.location.assign("../Drivers")
      }, 1000);
    }


}




    const Drivers = Driver.map((drv) => {
       if(drv.plateNumber==null && drv.role=="Driver"){
        return (
            <option>
            {drv.names}
            
            </option>
            
        )
       } 
    })

        const Buses = Plate.map((bus) => {
            return (
                <option>
                {bus.plate}
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
                                            <select id="Driver"
                                                className="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[75px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px] sm:ml-[15px]">
                                                <option
                                                defaultValue>Drivers</option>
                                                {Drivers}
                                            
                                            </select>
                                    </div>

                                            <div className='flex'>
                                                <label htmlFor="role" className="text-blue-700 text-xl mt-6 sm:sr-only">Buses:</label>
                                                <select id="Bus"
                                                className="border-2 border-blue-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-[337px] py-2 ml-[85px] mt-5 mb-10 shadow-b focus:outline-none sm:w-[250px] sm:ml-[15px]">
                                                <option 
                                                defaultValue>Buses</option>
                                                {Buses}
                                                
                                                </select>
                                            </div> 

                                        </div>
                                    </div>
                                            <div className='flex justify-center mb-10'>
                                                {!loading1 &&<button type="submit"
                                                    onClick={() => AssignDriver()
                                                        
                                                    }
                                                    
                                                    className='bg-blue-700 text-white py-2.5 px-8 rounded-lg' > {" "} Assign</button>}
                                                     {loading1 &&
                     <button  className='px-4 py-2.5 rounded-lg bg-blue-100 text-blue-900 hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs md:py-1 md:px-12  lg:text-base md:text-xs m:text-xs xs:text-xs xs:py-2'> 
                     <svg role="status" class="inline w-4 h-4 mr-2 text-gray-900 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                     <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                     </svg>
                     Loading...
                 </button>
                      }
                                                    <Link to="/dashboard/Drivers">
                                                <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-5'>Cancel</button>
                                                </Link>
                                        </div>
                    </>
  )
}

export default Assign