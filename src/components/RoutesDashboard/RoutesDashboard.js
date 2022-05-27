import React from 'react';
import { Icon } from '@iconify/react';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteRoute } from '../../redux/reducers/routesSlice';
import TopNavbar from '../Dashboard/TopNavbar';
import UpdateRoute from './UpdateRoute';


function RoutesDashboard() {

  const dispatch=useDispatch();
  const routeList = useSelector( (state) => state.routesReducer.value);


  return (
    <>
    <TopNavbar goto={e=>window.location.assign('/dashboard/Routes/Add')}/>
    <div className='mt-20'>
      <Routes>
        <Route path="update" element={<UpdateRoute />}></Route>
      </Routes>

       
      <table className='border-1 '>
        <tr>
          <th className='px-10 py-6 sm:text-sm' >Route no</th>
          <th className='px-10 py-6 sm:text-sm' >From</th>
          <th className='px-10 py-6 sm:text-sm'>To</th>
          <th className='px-10 py-6 sm:text-sm'>N0 of stations</th>
          <th className='px-10 py-6 sm:text-sm'>stations</th>
          <th className='px-10 py-6 sm:text-sm'>Price</th>
          <th className='px-10 py-6 sm:text-sm'> Action</th>
          <th>
          </th>
        </tr>
        {routeList.map((route) => {
          return (
            <tr>
              <td className='px-10 py-6 sm:text-xs'>{route.routeno}</td>
              <td className='px-10 py-6 sm:text-xs'>{route.from}</td>
              <td className='px-10 py-6 sm:text-xs'>{route.to}</td>
              <td className='px-10 py-6 sm:text-xs'>{route.no_of_stations}</td>
              <td className='px-10 py-6 sm:text-xs'>{route.stations}</td>
              <td className='px-10 py-6 sm:text-xs'>{route.price}</td>
              <td className='flex px-10 py-6 sm:text-xs'>
                <Link to={"update"} >
                  <Icon icon="ci:edit" width="24"  color='green' />
                </Link>

              
                  <Icon
                    onClick={() => {
                       dispatch(DeleteRoute({ id: route.id }));
                 
                    }}

                    icon="fluent:delete-28-regular" width="24" color='red' />
            


              </td>
            </tr>
          )
        })}
      </table>
    
    </div>
  </>
  )
}

export default RoutesDashboard;