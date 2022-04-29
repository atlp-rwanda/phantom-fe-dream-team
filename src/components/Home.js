import React from 'react';
import {Link} from 'react-router-dom';

 function Home() {
  return (
    <div className='text-lg font-extrabold ml-14 hover:text-blue-600'><Link to ="/dashboard">Dashboard</Link></div>
  )
}

export default Home;
