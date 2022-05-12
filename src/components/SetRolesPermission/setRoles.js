import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import user from '../img/random.jpg';
import SuccefullPopup from '../succesfull';
import { Route, Link, Routes, useLocation } from "react-router-dom";
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
import AddRole from "./AddRole";
import UpdateRole from "./UpdateRole";
import DeleteRole from "./DeleteRole";
function SetRoles() {


  const { loading } = useLoader();





  return (



    <div>


      <Routes>

        <Route exact path="add" element={<AddRole />}></Route>
        <Route exact path="update" element={<UpdateRole />}></Route>
        <Route exact path="delete" element={<DeleteRole />}></Route>

      </Routes>
      <table className="m-12">
        <tr className="mb-12 text-xl text-blue-700 border-solid border-2 border-black ">
          <th className="">Role name</th>
          <th classname="colspan=4 " >Permissions</th>
          <th  classname="colspan=2 " >Actions</th>
        </tr>

        <tr className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
          <td className="text-xl font-bold">Admin</td>
          <td className="flex text-lg">
          <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
              <Link to={"update"} >
                <Icon icon="ci:edit" width="24" color="green" className="text-green"/>
              </Link>
            </td>
            <td>
              <Link to={"delete"} >
                <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
              </Link>
            </td>


          </td>
        </tr>
        <tr className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
          <td className="text-xl font-bold">Operator</td>
          <td className="flex text-lg">
          <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
              <Link to={"update"} >
                <Icon icon="ci:edit" width="24" color="green" className="text-green"/>
              </Link>
            </td>
            <td>
              <Link to={"delete"} >
                <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
              </Link>
            </td>


          </td>
        </tr>

        <tr className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
          <td className="text-xl font-bold">Driver</td>
          <td className="flex text-lg">
          <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" value={true} className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
              <Link to={"update"} >
                <Icon icon="ci:edit" width="24" color="green" className="text-green"/>
              </Link>
            </td>
            <td>
              <Link to={"delete"} >
                <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
              </Link>
            </td>


          </td>
        </tr>

      </table>
      <button className="m-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
        <Link to={"add"} >
          Save
        </Link>

      </button>
      <button className="m-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
        <Link to={"add"} >
         Cancel
        </Link>

      </button>
      <button className="m-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
        <Link to={"add"} >
          Add Role
        </Link>

      </button>
    </div>

  );
}
export default SetRoles;