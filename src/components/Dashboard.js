import React from 'react'
import { Link } from 'react-router-dom';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesDashboard from './RoutesDashboard/RoutesDashboard';
function Dashboard() {
    <BrowserRouter>
    <Routes>
      <Route exact path="/Dashboard/Routes"  element={<RoutesDashboard/>}></Route>
    </Routes>
  </BrowserRouter>
  return (
    <div>
        
           <Link to={"/Dashboard/Routes"} >
               routesdashboard
          </Link>
    </div>
  )
}

export default Dashboard