import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
// import TopNavbar from './TopNavbar';
import RoutesDashboard from './RoutesDashboard';
import Buses from './Buses';
import Register from './Register';
import Users from './users'
import Driver from './Drivers'
import RegisterUser from "../RegisterUser/registerUser"



function Dashboard(props) {
  return (

    <div className='flex sm:px-6 lg:px-8'>

      <Sidebar />
        <section className='flex flex-col basis-4/5'>
       
            <Routes>
              <Route path="Routes/*" element={<RoutesDashboard />} />
              <Route path="Buses/*" element={<Buses />} />
              <Route path="Users/" element={<Register />} />
              <Route path="Drivers/*" element={<Driver />} />
              <Route path="User/*" element={<Users />} />
              <Route path="Users/AddUser" element={<RegisterUser/>} />
            </Routes>
  
      </section>
    </div>

  )
}
export default Dashboard;

