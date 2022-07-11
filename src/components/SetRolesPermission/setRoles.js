import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import SkeletonUI from '../skeletonUI';
import { setPermission, deleteRole } from "../../redux/actions/index";
import TopNavbar from "../Dashboard/TopNavbar";
function setRoles() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
  const [, setData] = useState(null);
  const [Permissions, setPermissions] = [{
    AddEditDelOp: useState(false),
    viewDelOp: useState(false),
    AssgnRemDriv: useState(false),
    addRemRoute: useState(false),
    UpdateBusInfo: useState(false),
    UpdateProf: useState(false),
  }];

  useEffect(() => {
    fetch('http://localhost:8000/Permissions')
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setError(null);
      }).catch(err => {
        // cathes Network/connection error
        setLoading(false);
        setError(err.message);
      })
  }, []);

  function loadForm(info) {
    const Perm = info.Permissions;
    console.log(Perm.AddEditDelOp);
    if (Perm.AddEditDelOp == true) {
      document.getElementById('One' + (info.id)).checked = true;
    }
    if (Perm.viewDelOp == true) {
      document.getElementById('Two' + (info.id)).checked = true;
    }
    if (Perm.AssgnRemDriv == true) {
      document.getElementById('Three' + (info.id)).checked = true;
    }
    if (Perm.addRemRoute == true) {
      document.getElementById('Four' + (info.id)).checked = true;
    }
    if (Perm.UpdateBusInfo == true) {
      document.getElementById('Five' + (info.id)).checked = true;
    }
    if (Perm.UpdateProf == true) {
      document.getElementById('Six' + (info.id)).checked = true;
    }

  }


  function submitForm(id) {
    const OneInput = document.getElementById('One' + id);
    Permissions.AddEditDelOp = OneInput.checked ? true : false;
    const TwoInput = document.getElementById('Two' + id)
    Permissions.viewDelOp = TwoInput.checked ? true : false;

    const ThreeInput = document.getElementById('Three' + id)
    Permissions.AssgnRemDriv = ThreeInput.checked ? true : false;

    const FourInput = document.getElementById('Four' + id)
    Permissions.addRemRoute = FourInput.checked ? true : false;
    const FiveInput = document.getElementById('Five' + id)
    Permissions.UpdateBusInfo = FiveInput.checked ? true : false;
    const SixInput = document.getElementById('Six' + id)
    Permissions.UpdateProf = SixInput.checked ? true : false;
    const Role = document.getElementById("role" + id).value;




    if (Role != '') {
      fetch('http://localhost:8000/Permissions/' + id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          {
            "Permissions": { "AddEditDelOp": Permissions.AddEditDelOp, "viewDelOp": Permissions.viewDelOp, "AssgnRemDriv": Permissions.AssgnRemDriv, "addRemRoute": Permissions.addRemRoute, "UpdateBusInfo": Permissions.UpdateBusInfo, "UpdateProf": Permissions.UpdateProf },
            "Role": Role
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
      window.reload()
    }
  }


  function Delete(id) {
    if (confirm('Are you sure to delete this role?')) {
      dispatch(deleteRole(id));
      window.reload();
    }
  }
  function Editable(id) {
    document.getElementById('role' + id).readOnly = false;

  }

  return (
    <>
      <TopNavbar goto={e => window.location.assign('/dashboard/Roles/add')} />
      <div className="flex flex-col relative p-4 sm:p-2 sm:w-full">
          <table id='Wtable' className="table-auto sm:shadow-2xl border-collapse w-fullxx border-black" >
            <thead className="sm:text-sm">
              <tr className="mb-12 text-xl text-blue-700 bg-gray-200 border-solid border-2 border-black sm:text-sm">
                <th className="pr-[200px]">Role</th>
                <th className=" colspan=4 pr-[300px]" >Permissions</th>
                <th className="colspan=2  sm:hidden" >Actions</th>
              </tr>
            </thead>
            <tbody>
              {error && <div className="flex content center text-lg text-red-500 pl-8 " >{error}</div>}
              {loading && <SkeletonUI />}
              { infos && infos.map((info) => (
                setTimeout(() => {
                  loadForm(info)
                }, "1000"),
                <tr className="mb-12  h-8 text-xl hover:border-solid border-solid border-2 border-black hover:border-2 hover:border-blue-600  sm:mb-4">
                  <td className="text-lg font-bold  sm:text-sm sm:w-4 " onClick={() => Editable(info.id)}><input type="text" id={'role' + info.id} placeholder={info.Role} className="font-bold placeholder-black" readOnly />
                    <h3 className="sm:text:sm text-slate-600">
                      Description: <br />
                      {info.Description}
                    </h3>
                  </td>
                  <td className="flex flex-col text-lg sm:text-sm">

                    <td className="flex"><input type="checkbox" id={'One' + info.id} className="mt-2 mr-2 " />Add,Edit,Delete Operator</td>
                    <td className="flex"><input type="checkbox" id={'Two' + info.id} className="mt-2 mr-2" />View Operators</td>
                    <td className="flex"><input type="checkbox" id={'Three' + info.id} className="mt-2 mr-2" />Assign,Remove Driver to bus</td>
                    <td className="flex"><input type="checkbox" id={'Four' + info.id} className="mt-2 mr-2" />Add,Remove route </td>
                    <td className="flex"><input type="checkbox" id={'Five' + info.id} className="mt-2 mr-2" />Update Bus status</td>
                    <td className="flex"><input type="checkbox" id={'Six' + info.id} className="mt-2 mr-2" />Update profile</td>
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
export default setRoles;