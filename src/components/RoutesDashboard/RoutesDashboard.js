import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import SkeletonUI from '../skeletonUI';
import SuccefullPopup from '../succesfull';
import ErrorPopup from "../error";

import TopNavbar from "../Dashboard/TopNavbar";



function Routes() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);

  const [Infos, setData] = useState();
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const [code,setCode]=useState("");

  const [distance, setDistance] = useState("");
  const [Latitude,setLatitude] = useState("");
  const [longitude,setLongitude]= useState("");
  const [Permissions, setPermissions] = [{
    AddEditDelOp: useState(false),
    viewDelOp: useState(false),
    AssgnRemDriv: useState(false),
    addRemRoute: useState(false),
    UpdateBusInfo: useState(false),
    UpdateProf: useState(false),
  }];
  var loggedin = localStorage.getItem("auth-token")

  useEffect(() => {
    fetch('http://localhost:3002/api/v1/routes', 
    { method: 'GET', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`}})
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data)
        setLoading(false);
        setError(null);
      }).catch(err => {
        // cathes Network/connection error
        setLoading(false);
        setError(err.message);
      })
  }, []);

  // DELETING A ROUTE
  
  function Delete(id) {
    if (confirm('Are you sure to delete this role?')) {
      fetch('http://localhost:3002/api/v1/routes/'+ id, {
        method: 'DELETE',
        headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
      }).then((res) => {
        
          window.location.reload();
        ;
      }) 
  
    }
  }

  // update a route 
  function update(id) {
    
    let obj = Infos.find(o => o.routeId === id);
    var update ={
      origin:document.getElementById('origin'+id).value || obj.origin,
      destination:document.getElementById('destination'+id).value || obj.destination,
      distance:document.getElementById('distance'+id).value || obj.distance
    } 
    if (update != '') {
      fetch('http://localhost:3002/api/v1/routes/'+id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
        body: JSON.stringify(update)
      }).then((res) => {
      if(res.status == 200){
        setSucceed(true);
      }else{
        setError(true);
      }
      
      })   
        console.log(update)
    }
    }
    function close() {
      setSucceed(false)
      window.location.reload()
    }

  function Editable(id) {
    document.getElementById('origin'+id).readOnly = false;
    document.getElementById('destination'+id).readOnly = false;
    document.getElementById('distance'+id).readOnly = false;
   

  }

  return (
    <>
      <TopNavbar goto={e => window.location.assign('/dashboard/routes/add')} />
      <div className="flex flex-col relative p-4 sm:p-2 sm:w-full">
      <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block'>
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
          <th scope="col" className="px-12 py-3" >Route no</th>
          <th scope="col" className="px-12 py-3" >From</th>
          <th scope="col" className="px-12 py-3">To</th>
          <th scope="col" className="px-12 py-3">Distance</th>
          <th scope="col" className="px-12 py-3"> Action</th>
          <th>
          </th>
        </tr>
        </thead>
            <tbody>
              {error && <div className="flex content center text-lg text-red-500 pl-8 " >{error}</div>}
              {loading && <SkeletonUI />}
              {Infos && Infos.map((info) => (
                setTimeout(() => {
                }, "5000"),
              
                
                <tr   onClick={() => Editable(info.routeId)} className="mb-12  h-8 text-xl hover:border-solid border-solid border-2 border-black hover:border-2 hover:border-blue-600  sm:mb-4">
                  <td className="text-lg font-bold  sm:text-sm sm:w-4 ">

                      {info.routeId}
                  </td>
                  <td className="flex flex-col text-lg sm:text-sm" >
                  <input type="text" id={'origin' + info.routeId} placeholder={info.origin} className="font-bold placeholder-black" readOnly />
                  </td>
               
                  <td className='pl-8 sm:flex'>
                  <input type="text" id={'destination' + info.routeId} placeholder={info.destination} className="font-bold placeholder-black" readOnly />
                 
                  </td>
      
                 
                  <td className='pl-8 sm:flex'>
                  <input type="text" id={'distance' + info.routeId} placeholder={info.distance} className="font-bold placeholder-black" readOnly />
                 
                  </td>
                  <td className='pl-8 sm:flex'>
                    <td>
                      <button onClick={() => update(info.routeId)}>
                        <Icon icon="carbon:change-catalog" color="green" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => Delete(info.routeId)}>
                        <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
export default Routes;