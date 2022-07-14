import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import SkeletonUI from '../skeletonUI';
import { setPermission, deleteBus } from "../../redux/actions/index";
import TopNavbar from "../Dashboard/TopNavbar";
function Buses() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [Infos, setData] = useState(null);
  const [Permissions, setPermissions] = [{
    AddEditDelOp: useState(false),
    viewDelOp: useState(false),
    AssgnRemDriv: useState(false),
    addRemRoute: useState(false),
    UpdateBusInfo: useState(false),
    UpdateProf: useState(false),
  }];
  var loggedin =  localStorage.getItem("auth-token")
  useEffect(() => {
    fetch('https://phantom-be.herokuapp.com/api/v1/buses', 
    { method: 'GET', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,}})
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        console.log(data)
        setLoading(false);
        setError(null);
      }).catch(err => {
        // cathes Network/connection error
        setLoading(false);
        setError(err.message);
      })
  }, []);


  function submitForm(id) {
    if (Role != '') {
      fetch('http://localhost:8000/Permissions/' + id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            plate:Plate,type:busType,seat:Seats
          }
        )
      }).then(() => {
        console.log('role and permissions updated');
      })
    }
    else {
      var NPermissions = {
        "Permissions": { "AddEditDelOp": Permissions.AddEditDelOp, "viewDelOp": Permissions.viewDelOp, "AssgnRemDriv": Permissions.AssgnRemDriv, "addRemRoute": Permissions.addRemRoute, "UpdateBusInfo": Permissions.UpdateBusInfo, "UpdateProf": Permissions.UpdateProf }
      }
      dispatch(setPermission(NPermissions, id));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }


  function Delete(id) {
    if (confirm('Are you sure to delete this role?')) {
      dispatch(deleteBus(id));
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    }
  }
  function Editable(id) {
    document.getElementById('busType'+id).readOnly = false;
    document.getElementById('plate'+id).readOnly = false;

  }
var ij=0;
  return (
    <>
      <TopNavbar goto={e => window.location.assign('/dashboard/buses/add')} />
      <div className="flex flex-col relative p-4 sm:p-2 sm:w-full">
          <table id='Wtable' className="table-auto sm:shadow-2xl border-collapse w-fullxx border-black" >
            <thead className="sm:text-sm">
              <tr className="mb-12 text-xl text-blue-700 bg-gray-200 border-solid border-2 border-black sm:text-sm">
                <th className="pr-[100px]">No</th>
                <th className=" colspan=2 pr-[100px]" >Plate</th>
                <th className="colspan=2  sm:hidden" >Type</th>
                <th className="colspan=2  sm:hidden" >Seats</th>
                <th className="colspan=2  sm:hidden" >Date added</th>
                <th className="colspan=2  sm:hidden" >Action</th>
              </tr>
            </thead>
            <tbody>
              {error && <div className="flex content center text-lg text-red-500 pl-8 " >{error}</div>}
              {loading && <SkeletonUI />}
              {Infos && Infos.map((info) => (
                setTimeout(() => {
                }, "1000"),
                ij+=1,
                
                <tr  onClick={() => Editable(info.id)} className="mb-12  h-8 text-xl hover:border-solid border-solid border-2 border-black hover:border-2 hover:border-blue-600  sm:mb-4">
                  <td className="text-lg font-bold  sm:text-sm sm:w-4 ">

                      {ij}
                  </td>
                  <td className="flex flex-col text-lg sm:text-sm" >
                  <input type="text" id={'plate' + info.id} placeholder={info.plate} className="font-bold placeholder-black" readOnly />
                  </td>
                  <td className='pl-8 sm:flex' >
                  <input type="text" id={'busType' + info.id} placeholder={info.busType} className="font-bold placeholder-black" readOnly />
                  {info.busType}
                  </td>
                  <td className='pl-8 sm:flex'>
                  {info.seat}
                  </td>
                  <td className='pl-8 sm:flex'>
                  {info.createdAt}
                  </td>
                  <td className='pl-8 sm:flex'>
                    <td>
                      <button onClick={() => submitForm(info.id)}>
                        <Icon icon="carbon:change-catalog" color="green" />
                      </button>
                    </td>
                    <td>
                      <button onClick={() => Delete(info.id)}>
                        <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
                      </button>
                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </>
  )
}
export default Buses;