import React from 'react'
import {Link, Route, Routes } from "react-router-dom";
import RoutesDashboard from './RoutesDashboard/RoutesDashboard';
import UpdateRoute from './RoutesDashboard/UpdateRoute';
import AddnewRoutes from './RoutesDashboard/AddnewRoutes';
function Dashboard() {
  return (
    <div className='mt-20'>
     
        <Routes>
          <Route path="Routes/" element={<RoutesDashboard />}> </Route>
          <Route path="Routes/add" element={<AddnewRoutes />}></Route>
        <Route path="Routes/update" element={<UpdateRoute />}></Route>
        </Routes>

    </div>
  )
}

export default Dashboard;