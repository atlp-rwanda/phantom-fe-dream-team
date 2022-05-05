import React from 'react';
import sidebar from './sidebar';
import TopNavbar from './TopNavbar';


function Dashboard(props) {
  const [route, setRoute] = useState("users");

  const Route = () => {
    if(route === "users"){
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
      <sidebar />
      
      <section className='flex flex-col basis-4/5'>
        <TopNavbar />
      </section>
    </div>

  )
}
export default Dashboard;

