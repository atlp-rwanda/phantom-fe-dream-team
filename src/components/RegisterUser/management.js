import React, { useState,useEffect } from 'react'
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
const [role,setRole]=useState('')

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
        <select  onChange={(e)=>setRole(e.target.value)} value={item.role} >
        <option value="Admin">Admin</option>
          <option value="Driver">Driver</option>
          <option value="Operator">Operator</option>
          </select>
        </td>
        <td class="px-6 py-4 text-right">
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>handleDelete(item.ID)}>Delete</p>
        </td>
    </tr>
    );
  });
    // delete a user
    const handleDelete=(id)=>{
        const removedArr = [...users].filter(user => user.ID !== id);

        setUsers(removedArr);
        window.location.reload();
      }
      const LOCAL_STORAGE_KEY = 'register'
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users))
      }, [users])

  return (
      <>  
      <div className='flex justify-center'>
      <Link to="/RegisterUser">
         <button className='bg-blue-700 text-white py-2.5 px-8 rounded-lg mt-10'>Register user</button>
         </Link>
         </div>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg justify-center text-center flex mt-10 mb-40">
    
    <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
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
                    Action
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
