import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux';
import SuccefullPopup from '../succesfull';
import { Link } from "react-router-dom";
import ErrorPopup from "../error";
import { useLoader } from '../useLoader';
import SkeletonUI from '../skeletonUI';
import TopNavbar from "../Dashboard/TopNavbar";
import { setPermission } from "../../redux/actions/index";
import data from './data.json';
import { info } from "autoprefixer";
function AddRole() {
  const { loading,setLoading } = useLoader();
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);
  const [Role, setRole] = useState('');
  const [Permissions, setPermissions] = [{
    AddEditDelOp: useState(false),
    viewDelOp: useState(false),
    AssgnRemDriv: useState(false),
    addRemRoute: useState(false),
    UpdateBusInfo: useState(false),
    UpdateProf: useState(false),
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
      setSucceed(true);
    })
  }
  function close() {
    setSucceed(false)
    window.location.reload()
  }
  if (succeed == true) {
    setTimeout(() => {
      setSucceed(false)
      window.location.reload()
    }, "5000")
  }

  return (

    <>
      {/* <TopNavbar goto={e=>window.location.assign('/dashboard/Roles/add')}/> */}
      {/* {loading && <SkeletonUI />}
      {!loading && ( */}
        <div className=" w-[500px] h-[400px] md: block justify-start sm:text-sm bg-gray-200   absolute right-[400px] top-[80px] sm:right-0">
          <div className="flex pt-8">
            <div className="flex-col ml-12 font-bold text-black text-lg">
              <h3 className="mt-2">User Role:</h3>
              <h3 className="mt-2">Permissions:</h3>
            </div>
            <div className="pl-4">
              <div className='m-2 '>
                <input type="text" id='' placeholder='Enter Role Name' value={Role}
                  onChange={(e) => setRole(e.target.value)}
                  className='border border-solid-2 border-blue-600 px-2 rounded' />
              </div>
              <div>

                <h1 className="font-bold text-blue-700"> Select Permissions</h1>
                <table m-0>
                  <tbody>
                <tr className='flex flex-col sm:text-sm'>

                  <td className="flex"><input type="checkbox" id={'One'} className="mt-2 mr-2 " />Add,Edit,Delete Operator</td>
                  <td className="flex"><input type="checkbox" id={'Two'} className="mt-2 mr-2" />View Operators</td>
                  <td className="flex"><input type="checkbox" id={'Three'} className="mt-2 mr-2" />Assign,Remove Driver to bus</td>
                  <td className="flex"><input type="checkbox" id={'Four'} className="mt-2 mr-2" />Add,Remove route </td>
                  <td className="flex"><input type="checkbox" id={'Five'} className="mt-2 mr-2" />Update Bus status</td>
                  <td className="flex"><input type="checkbox" id={'Six'} className="mt-2 mr-2" />Update profile</td>
                </tr>
                </tbody>
                </table>
              </div>

            </div>
          </div>
          <div className="flex mt-12 ml-32">
            <div className="pr-9">


              <button className=" ml-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-4 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
                <Link to={"/Dashboard/Roles"} >
                  Cancel
                </Link>

              </button>
            </div>
            <div>
              <button onClick={() => submitForm()} className=" lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-1 px-6 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">Save</button>
            </div>
          </div>


        </div>

       {/* )}  */}
      <SuccefullPopup trigger={succeed}>
        <button onClick={() => close()} className="absolute top-0 right-2">X</button>
        <h3 className="px-10">Success</h3>
      </SuccefullPopup>
      <ErrorPopup trigger={error}>
        <button onClick={() => setError(false)} className="absolute top-0 right-2">X</button>
        <h3 className="px-10">An error occured</h3>
      </ErrorPopup>

    </>
  )
}

export default AddRole;