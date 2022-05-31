import React from 'react';
import { Icon } from '@iconify/react';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateRoute from './UpdateRoute';
import TopNavbar from '../Dashboard/TopNavbar';
import ReadOnly from './readOnly';
import { DeleteRoute,updateRoute } from '../../redux/reducers/routesSlice';




function RoutesDashboard() {

  const dispatch=useDispatch();

  
  const routeList = useSelector( (state) => state.routesReducer.value);

  const [editrouteid,setEditrouteid]=useState(null)
  //edit form
  const [editFormData, setEditFormData] = useState({
    routeNo: "",
    from: "",
    to: "",
    noOfStations: "",
    stations: "",
    price:""
  });



  const handleEditClick=(event,route)=>{
    event.preventDefault();
    setEditrouteid(route.id);
    //get edit form data
    const formValues = {
      routeNo:route.routeNo,
      from:route.from,
      to: route.to,
      noOfStations:route.noOfStations,
      stations:route.stations,
      price:route.price
    };
    setEditFormData(formValues);
  }


  const handleEditFormChange = (event) => {
    event.preventDefault();
  
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
  
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
  
    setEditFormData(newFormData);
  };



  const handleEditFormSubmit = (event,route) => {
    event.preventDefault();
    dispatch(updateRoute(
      {id:route.id ,
        routeNo:editFormData.routeNo,
        from:editFormData.from,
        to:editFormData.to,
        noOfStations:editFormData.noOfStations,
        stations:editFormData.stations,
        price:editFormData.price
    }))

    setEditrouteid(null);
  }


 //cancel button
const handleCancelClick=()=>{
  setEditrouteid(null);
}
//small screen

const Elements = routeList.map((route) => {
  return (
      <>
<div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
<div className="bg-white space-y-3 p-4 rounded-lg shadow">
 <div className="flex items-center space-x-2 text-sm">
   <div className='flex flex-row'>
      <p className='mr-2'>routeNo: </p>
     <p className="text-blue-500 font-bold hover:underline" >{route.routeNo}</p>
   </div>   
 </div>

   <div className="text-sm text-gray-700 flex flex-row">
 <p className='mr-2'>From: </p>
 {route.from}
 </div>
 <div className="text-sm text-gray-700 flex flex-row">
 <p className='mr-2'>To: </p>
 {route.to}
 </div>
 <div className="text-sm font-medium text-black flex flex-row">
 <p className='mr-2'>noOfStations: </p>
 {route.noOfStations}
 </div>
 <Icon 
    onClick={() => {
    dispatch(DeleteRoute({ id: route.id }));
            }}
   icon="fluent:delete-28-regular" width="24" color='red' />
 
</div>
</div>
</div>
      </>
  );
});

  return (
    <>
    <TopNavbar goto={e=>window.location.assign('/dashboard/Routes/Add')}/>

    {Elements}
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg justify-center text-center flex mt-10 mb-40 ">


       
      <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block'>
      <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <tr className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
          <th scope="col" className="px-12 py-3" >Route no</th>
          <th scope="col" className="px-12 py-3" >From</th>
          <th scope="col" className="px-12 py-3">To</th>
          <th scope="col" className="px-12 py-3">N0 of stations</th>
          <th scope="col" className="px-12 py-3">stations</th>
          <th scope="col" className="px-12 py-3">Price</th>
          <th scope="col" className="px-12 py-3"> Action</th>
          <th>
          </th>
        </tr>
        </thead>
        {routeList.map((route) => {
          return (
        /* <ReadOnly 
        
        handleEditClick={handleEditClick}
        route={route}/> */

        <>    {editrouteid === route.id ? (
              

               
               
               
               
               
                <UpdateRoute 


                  route={route}
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                   handleEditFormSubmit={handleEditFormSubmit}
                  handleCancelClick={handleCancelClick}
                />
             
              ) : (
                <ReadOnly
                  route={route}
                  handleEditClick={handleEditClick}
                />
              )}    </>
          )
        })}
      </table>
    
    </div>





    

  </>
  )
}

export default RoutesDashboard;