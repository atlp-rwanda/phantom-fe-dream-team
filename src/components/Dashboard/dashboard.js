import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import Buses from './Buses';
import Drivers from './Drivers';
import  SetRoles from '../SetRolesPermission/setRoles';
import AddRole from '../SetRolesPermission/AddRole';
import Users from './User';
import RoutesDashboard from '../RoutesDashboard/RoutesDashboard';
import UpdateRoute from '../RoutesDashboard/UpdateRoute';
import AddnewRoutes from '../RoutesDashboard/AddnewRoutes';



function Dashboard(props) {
  return (
    <div className='flex sm:px-6 lg:px-8'>
      <Sidebar />
      
         
        

        <section className='flex flex-col basis-4/5'>
     
       
            <Routes>
            <Route path="/" element={<RoutesDashboard />} />
            <Route path="Routes/" element={<RoutesDashboard />}> </Route>
          <Route path="Routes/add" element={<AddnewRoutes />}></Route>
          <Route path="Routes/update" element={<UpdateRoute />}></Route>
              <Route path="Buses/*" element={<Buses />} />
              <Route path="Drivers/*" element={<Drivers />} />
              <Route path="Users/*" element={<Users />} />
              <Route path="Roles/" element={<SetRoles/>} />
              <Route path="Roles/add" element={<AddRole/>} />
              <Route path="Users/" element={<Users />} />
            </Routes>
      </section>
    </div>
  )
}
export default Dashboard;