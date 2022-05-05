import React from 'react';
import { Icon } from '@iconify/react';
import { Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoute } from '../../redux/reducers/routesSlice';
import UpdateRoute from './UpdateRoute';
import AddnewRoutes from './AddnewRoutes';
import DeleteRoute from './DeleteRoute';
function RoutesDashboard() {
  const dispatch=useDispatch();
  const routeList = useSelector((state) => state.routesReducer.value);

  return (
    <div className='mt-20'>
      <Routes>

        <Route path="add" element={<AddnewRoutes />}></Route>
        <Route path="update" element={<UpdateRoute />}></Route>
        <Route path="delete" element={<DeleteRoute />}></Route>
      </Routes>


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
          <Link to={"add"} >
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
                <Link to={"update"} >
                  <Icon icon="ci:edit" width="24" className='text-green' />
                </Link>

                <Link to={"delete"} >
                  <Icon
                    onClick={() => {
                      dispatch(deleteRoute({ id: route.id }));
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

export default RoutesDashboard;