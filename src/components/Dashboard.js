import React from 'react'
import {Link, Route, Routes } from "react-router-dom";
import RoutesDashboard from './RoutesDashboard/RoutesDashboard';


function Dashboard() {




  return (
    <div className='mt-20'>
     
        <Routes>
          <Route path="Routes/*" element={<RoutesDashboard />}> </Route>
        </Routes>
    




      <Link to={"Routes/*"} >

        <button>routesdashboard</button>
      </Link>

    </div>
  )
}

export default Dashboard;