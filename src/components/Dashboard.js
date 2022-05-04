import React from 'react'
import { Link } from 'react-router-dom';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesDashboard from './RoutesDashboard/RoutesDashboard';
function Dashboard() {
 
    
      

  return (
    <div className='mt-20'>
        
           <Link to={"/Dashboard/Routes"} >
              <button>routesdashboard</button>
          </Link>
    </div>
  )
}

export default Dashboard