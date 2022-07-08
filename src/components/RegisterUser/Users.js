import React, { useState, useEffect } from 'react'
import TopNavbar from '../Dashboard/TopNavbar';

export default function management() {

  const [users, setUsers] = useState([])

  fetch("http://localhost:4000/api/v1/users", {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result.data)
      setUsers(result.data)
    })

  const DeleteUser = (id) => {

    fetch(`http://localhost:4000/api/v1/users/${id}`, {
      method: "DELETE",
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result.status)
        
      })
      .catch((error) => {
      });
  }


  const [role, setRole] = useState('')

  // large screen
  const cardElements = users.map((item) => {
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {item.names}
        </th>

        <td className="px-6 py-4">
          {item.email}
        </td>
        <td className="px-6 py-4">
          {item.phone}
        </td>
        <td className="px-6 py-4">
          <select onChange={(e) => setRole(e.target.value)} value={item.role} >
            <option value="Admin">Admin</option>
            <option value="Driver">Driver</option>
            <option value="Operator">Operator</option>
          </select>
        </td>
        <td class="px-6 py-4 text-right">
          <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => DeleteUser(item.id)}>Delete</p>
        </td>
      </tr>
    );
  });
  const Elements = users.map((item) => {
    return (
      <>
        {/* //phone */}
        <div className="p-5 bg-gray-100 sm:block lg:hidden md:hidden 2xl:hidden mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:block lg:hidden md:hidden 2xl:hidden">
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <p className="text-blue-500 font-bold hover:underline">{item.names}</p>
                </div>

              </div>
              <div>
                <span
                  className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.role}</span>
              </div>
              <div className="text-sm text-gray-700">
                {item.email}
              </div>
              <div className="text-sm font-medium text-black">
                {item.phone}
              </div>
              <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => DeleteUser(item.id)}>Delete</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  // delete a user
  const handleDelete = (id) => {
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
      <TopNavbar goto={e => window.location.assign('/dashboard/Users/AddUser')} />

      {Elements}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg justify-center text-center flex mt-10 mb-40 ">

        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400 sm:hidden lg:block md:block 2xl:block">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Names
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



