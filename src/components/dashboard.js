import React from 'react'
import username from './username.png';

function Dashboard() {
  return (
    <div className='flex'>

      <section>
        <div className=''>
        src={username}
          <h1>Username</h1>
        </div>

        <div className=''>
          <h1>Routes</h1>
        </div>

        <div className=''>
          <h1>Buses</h1>
        </div>

        <div className=''>
          <h1>Drivers</h1>
        </div>

        <div className=''>
          <h1>Users</h1>
        </div>

        <div className=''>
          <h1>Logout</h1>
        </div>

      </section>
      <section>
        <div className='text-blue-600'>
          <h1>ADMIN DASHBOARD</h1>
        </div>
      </section>




    </div>

  )
}
export default Dashboard;