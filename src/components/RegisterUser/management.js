import React, { useState } from 'react'
import {Link} from 'react-router-dom';
export default function management() {

const getDataform=()=>{
    const data=localStorage.getItem('register')
    if(data){
        return JSON.parse(data);
    }else{
        return []
    }
}
const [users,setUsers]=useState(getDataform())
const cardElements = users.map((item) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
           {item.firstname}
        </th>
        <td className="px-6 py-4">
           {item.lastname}
        </td>
        <td className="px-6 py-4">
           {item.email}
        </td>
        <td className="px-6 py-4">
           {item.phone}
        </td>
        <td className="px-6 py-4">
           {item.role}
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
        <td class="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
        </td>
    </tr>
    );
  });


  return (
      <>  
      <div className='flex justify-center'>
      <Link to="/RegisterUser">
         <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg mt-20'>Register user</button>
         </Link>
         </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg justify-center text-center flex mt-20 mb-40">
    
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    First name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Delete</span>
                </th>
            </tr>
        </thead>
        <tbody>
           {cardElements}
           
           
        </tbody>
    </table>
</div>
</>
  )
}
