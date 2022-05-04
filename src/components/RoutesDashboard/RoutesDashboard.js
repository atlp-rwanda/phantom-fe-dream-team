import React from 'react';
import { Icon } from '@iconify/react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import { deleteRoute } from '../../redux/reducers/routesSlice';
import UpdateRoute from './UpdateRoute';
import AddnewRoutes from './addnewRoutes';
import Dashboard from '../Dashboard';
import DeleteRoute from './DeleteRoute';

function RoutesDashboard() {
  const routeList=useSelector((state)=>state.routesReducer.value);
  <BrowserRouter>
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Dashboard/Routes/add" element={<AddnewRoutes />}></Route>
      <Route path="/Dashboard/Routes/update" element={<UpdateRoute />}></Route>
      <Route path="/Dashboard/Routes/delete" element={<DeleteRoute />}></Route>

    </Routes>
  </BrowserRouter>
  return (
    <div className='mt-20'>

      <table>
        <tr>
          <th>Route no</th>
          <th>From</th>
          <th>To</th>
          <th>N0 of stations</th>
          <th>stations</th>
          <th>Price</th>
          <th> Action</th>
          <th>
          </th>
          <Link to={"/Dashboard/Routes/add"} >
            addnewRoute
          </Link>


        </tr>
        {routeList.map((route) => {
          return (
            <tr>
              <td>{route.Routeno}</td>
              <td>{route.from}</td>
              <td>{route.to}</td>
              <td>{route.no_of_stations}</td>
              <td>{route.stations}</td>
              <td>{route.price}</td>
              <td className='flex'>
                <Link to={"/Dashboard/Routes/update"} >
                  <Icon icon="ci:edit" width="24" className='text-green' />
                </Link>

                <Link to={"/Dashboard/Routes/delete"} >
                  <Icon 
                   onClick={() => {
                    dispatch(deleteRoute({ routeno: route.routeno}));
                  }}
                
                  icon="fluent:delete-28-regular" width="24" className='text-red' />
                </Link>


              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default RoutesDashboard