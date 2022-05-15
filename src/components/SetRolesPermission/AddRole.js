import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import user from '../img/random.jpg';
import SuccefullPopup from '../succesfull';
import { Route, Link, Routes, useLocation } from "react-router-dom";
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
import UpdateRole from "./UpdateRole";
import DeleteRole from "./DeleteRole";
import {setPermission} from "../../redux/actions/index";
import data from './data.json';
import { info } from "autoprefixer";
function AddRole() {
  const [Role, setRole] = useState('');
  const [Permissions, setPermissions] = [{
   AddEditDelOp:useState(false),
   viewDelOp:useState(false),
   AssgnRemDriv:useState(false),
   addRemRoute:useState(false),
   UpdateBusInfo:useState(false),
   UpdateProf:useState(false),
  }];

function submitForm() {


  const OneInput = document.getElementById('One');
  Permissions.AddEditDelOp = OneInput.checked ? true : false;
  const TwoInput = document.getElementById('Two')
  Permissions.viewDelOp = TwoInput.checked ? true : false;

  const ThreeInput = document.getElementById('Three')
  Permissions.AssgnRemDriv = ThreeInput.checked ? true : false;

  const FourInput = document.getElementById('Four')
  Permissions.addRemRoute = FourInput.checked ? true : false;
  const FiveInput = document.getElementById('Five')
  Permissions.UpdateBusInfo = FiveInput.checked ? true : false;
  const SixInput = document.getElementById('Six')
  Permissions.UpdateProf = SixInput.checked ? true : false;

  const role = { Role, Permissions };

  fetch('http://localhost:8000/Permissions/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(role)
  }).then(() => {
    window.location.assign("../Roles")
  })
  }
  const { loading } = useLoader();

  return (

    <div className=''>
        {loading && <SkeletonUI />}
        {!loading && (
      <div className=" w-full h-full md: block justify-start">
        <div className="block w-full">
          <h2 className='font-bold'>ADD USER ROLE</h2>
        </div>
        <div className="flex pt-8">
          <div className="flex-col ml-12">
            <h3 className="mt-2">User Role:</h3>
            <h3 className="mt-2">Permissions:</h3>
          </div>
          <div className="pl-4">
            <div className='mt-2 '>
              <input type="text" id='' placeholder='Enter Role Name' value={Role}
          onChange={(e) => setRole(e.target.value)}
           className='border border-solid-2 border-black rounded' />
            </div>
            <div>
                              
            <h1 className="font-bold text-blue-700"> Select Permissions</h1>
              <tr className='flex flex-col sm:text-sm'>

              <td className="flex"><input type="checkbox" id={'One'} className="mt-2 mr-2 " />Add,Edit,Delete Operator</td>
                      <td className="flex"><input type="checkbox" id={'Two'}  className="mt-2 mr-2" />View Operators</td>
                      <td className="flex"><input type="checkbox" id={'Three'}  className="mt-2 mr-2" />Assign,Remove Driver to bus</td>
                      <td className="flex"><input type="checkbox" id={'Four'}  className="mt-2 mr-2" />Add,Remove route </td>
                      <td className="flex"><input type="checkbox" id={'Five'}  className="mt-2 mr-2" />Update Bus status</td>
                      <td className="flex"><input type="checkbox" id={'Six'}  className="mt-2 mr-2" />Update profile</td>
              </tr>
            </div>

          </div>
        </div>
        <div className="flex mt-12">
          <div className="pr-9">


            <button className=" ml-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
            <Link to={"/Dashboard/Roles"} >
            Cancel
        </Link>

              </button>
          </div>
          <div>
            <button onClick={()=>submitForm()} className=" lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">Save</button>
          </div>
        </div>


      </div>
        )}
    </div >
  )
}

export default AddRole;