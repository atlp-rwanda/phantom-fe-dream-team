import React, {useState} from 'react';
import { Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import TopNavbar from './TopNavbar';


function Dashboard(props) {
  const [route, setRoute] = useState("");

  const Route = () => {
    if(route === "users"){
      console.log(route)
      return <users />
    }else if(route === "buses"){
      return <Buses />
    }else if(route === "drivers"){
      return <Drivers />
    }else if(route === "routes"){
      return <Route />
    }
  }
  return (

    <div className='flex sm:px-6 lg:px-8'>
    <Sidebar />     
      <section className='flex flex-col basis-4/5'>
        <TopNavbar />
        <p>{route}</p>
      
      </section>
    </div>

  )
}
export default Dashboard;

