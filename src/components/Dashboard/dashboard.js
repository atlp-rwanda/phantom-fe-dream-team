import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNavbar from './TopNavbar';
import RoutesDashboard from './RoutesDashboard';
import Buses from './Buses';
import Register from './Register';
import Users from './users'
import Driver from './Drivers'



function Dashboard(props) {
  return (

    <div className='flex sm:px-6 lg:px-8'>

      <Sidebar />
        <section className='flex flex-col basis-4/5'>
          <TopNavbar />
            <Routes>
              <Route path="Routes/*" element={<RoutesDashboard />} />
              <Route path="Buses/*" element={<Buses />} />
              <Route path="Register/*" element={<Register />} />
              <Route path="Drivers/*" element={<Driver />} />
              <Route path="Users/*" element={<Users />} />
            </Routes>

      </section>
    </div>

  )
}
export default Dashboard;

