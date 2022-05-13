import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNavbar from './TopNavbar';
import RoutesDashboard from './RoutesDashboard';
import Buses from './Buses';
import Drivers from './Drivers';
import Users from './users'



function Dashboard(props) {
  return (

    <div className='flex sm:px-6 lg:px-8'>

      <Sidebar />
        <section className='flex flex-col basis-4/5'>
          <TopNavbar />
            <Routes>
              <Route path="Routes/*" element={<RoutesDashboard />} />
              <Route path="Buses/*" element={<Buses />} />
              <Route path="Drivers/*" element={<Drivers />} />
              <Route path="Users/*" element={<Users />} />
            </Routes>

      </section>
    </div>

  )
}
export default Dashboard;

