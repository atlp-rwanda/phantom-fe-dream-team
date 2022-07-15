import React, { useState, useEffect } from "react";
import TopNavbar from '../Dashboard/TopNavbar';
import {backendUrl} from "../../utils/Api.js"
import { Icon } from '@iconify/react';


function AssignDrivers() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true)
    const [Plate, setBusPlate] = useState([]);
    const loggedin =  localStorage.getItem("auth-token")
    const [load,setLoad] = useState(false)
    

  
function Unassign(i,a) {
    let Bs = Plate.find(o => o.plate === a);
    setLoad(true)
    const j=Bs.id
    fetch(backendUrl+`driverstobuses/unassign/driver/${i}/bus/${j}`, 
    { method: 'PUT', 
    headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,}})
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
      }).catch(err => {
        // cathes Network/connection error
        setLoading(false);
        setError(err.message);
      })
      setTimeout(() => {
       setLoad(false)
        window.location.reload()
      }, 1000);
    }

    
    

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
              setData(result.data)
            }),
            fetch(backendUrl+'buses', 
{ method: 'GET', 
headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,}})
  .then(res => {
    return res.json();
  })
  .then(data => {
    setBusPlate(data);
  }).catch(err => {
  })
           
    }, []);

    return (
        <>

            <TopNavbar goto={e => window.location.assign('/dashboard/Drivers/Assign')} />

            {/*On Phone */}
                
            {data && data.map((Driver) => {
                if(Driver.plateNumber!=null && Driver.role=="Driver"){
                    console.log(Driver)
                return (
                    <div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5 sm:flex-col">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
                            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
                                <div className="flex items-center space-x-2 text-sm">
                                    <div className='flex flex-row'>
                                        <p className='mr-2'>Drivers: </p>
                                        <p className="text-blue-500 font-bold hover:underline" >{Driver.names}</p>
                                    </div>   
                                </div>
                                
                                <div className="text-sm text-gray-700 flex flex-row">
                                    <p className='mr-2'>BUSES: </p>
                                    {Driver.plateNumber}
                                </div>
                                <div className="text-sm font-medium text-black flex flex-row">
                                    <p className='mr-2'>ACTION: </p>
                                    <p className="text-sm font-medium text-black flex flex-row">{!load && <button onClick={
                                        () => Unassign(Driver.id,Driver.plateNumber)
                                    }>UNASSIGN</button>}
                                   {load &&<button onClick={
                                        () => Unassign(Driver.id,Driver.plateNumber)
                                    }>
                                    <Icon icon="eos-icons:three-dots-loading" color="blue" /></button>}
                                    </p>
                                </div>
                            </div>
                    </div>
                   </div>
                )
            }}
            )}

            {/*On large screen */}

            <div className="relative overflow-x-auto  justify-center text-center flex mt-10 mb-40 ">
                <table className="w-full border-black text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block">
                    <thead className="mb-12 text-xl text-blue-700 bg-gray-200 border-solid border-2 sm:text-sm">
                        <tr>
                            <th scope="col" className="px-16 py-3">DRIVER</th>
                            <th scope="col" className="px-16 py-3">BUS</th>
                            <th scope="col" className="px-16 py-3">ACTIONS</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((Driver) => {
                            if(Driver.plateNumber!=null && Driver.role=="Driver"){
                            return (
                                <tr className="bg-white text-black border-b dark:bg-white dark:border-gray-700">
                                    <td scope="row" className="px-6 py-4 font-medium text-black dark:text-black whitespace-nowrap">{Driver.names}</td>
                                    <td scope="col" className="px-16 py-3">{Driver.plateNumber}</td>
                                    <td scope="col" className="px-16 py-3">
                                    {!load && <button onClick={
                                        () => Unassign(Driver.id,Driver.plateNumber)
                                    }>UNASSIGN</button>}
                                   {load &&<button onClick={
                                        () => Unassign(Driver.id,Driver.plateNumber)
                                    }>
                                    <Icon icon="eos-icons:three-dots-loading" color="blue" width="60" height="60" /></button>}
                                    </td>                                  
                                </tr>
                            )
                        }}
                        )}
                    </tbody>
                </table>

                </div>

        </>

                                                            
                                    
)}
export default AssignDrivers;