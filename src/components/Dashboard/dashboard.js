import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import  SetRoles from '../SetRolesPermission/setRoles';
import AddRole from '../SetRolesPermission/AddRole';
import Users from './User';
import AssignDrivers from '../Assign-drivers-to-buses/assign';
import Buses from '../RegisterBuses/buses';
import RoutesDashboard from '../RoutesDashboard/RoutesDashboard';




function Dashboard(props) {
  if (localStorage.getItem('auth')!="00psgwwj7819012n#%$hj18*&"){
    window.location.assign("../");
    console.log("Not loggedin");
  }
  return (
    <div className='flex sm:px-6 lg:px-8'>
      <Sidebar />
      
         
        

        <section className='flex flex-col basis-4/5'>
     
       
            <Routes>
            <Route path="/" element={<RoutesDashboard />} />
            <Route path="Routes/" element={<RoutesDashboard />}> </Route>
         
     
              <Route path="Buses/*" element={<Buses />} />
              <Route path="Users/*" element={<Users />} />
              <Route path="Roles/" element={<SetRoles/>} />
              <Route path="Roles/add" element={<AddRole/>} />
              <Route path="Users/" element={<Users />} />
              <Route path="Drivers/" element={<AssignDrivers />} />
            </Routes>
      </section>
    </div>
  )
}
export default Dashboard;