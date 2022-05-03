import React from 'react';
import { Icon } from '@iconify/react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import UpdateRoute from './UpdateRoute';
import AddnewRoutes from './addnewRoutes';
import Dashboard from '../Dashboard';
const data = [
  { Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 },
  { Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 },
  { Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 }
]
function RoutesDashboard() {
  <BrowserRouter>
    <Routes>
      <Route exact path="/Dashboard" element={<Dashboard/>} />
      <Route exact path="/Dashboard/Routes/addRoute" element={<AddnewRoutes/>}></Route>
      <Route exact path="/Dashboard/Routes/updateRoute" element={<UpdateRoute/>}></Route>
    </Routes>
  </BrowserRouter>
  return (
    <div>

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

          <Link to={"/Dashboard/Routes/addRoute"} >
            addnewRoute
          </Link>
          <Link to={"/Dashboard/Routes/updateRoute"} >
            updateRoute
          </Link>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.Routeno}</td>
              <td>{val.from}</td>
              <td>{val.to}</td>
              <td>{val.no_of_stations}</td>
              <td>{val.stations}</td>
              <td>{val.price}</td>
              <td className='flex'>
                <Icon icon="ci:edit" width="24" className='text-green' />
                <Icon icon="fluent:delete-28-regular" width="24" className='text-red' />
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default RoutesDashboard