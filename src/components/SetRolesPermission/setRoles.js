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
import {setPermission} from "../../redux/actions/index";
import data from './data.json';
import { info } from "autoprefixer";

function setRoles (){
  const dispatch = useDispatch();
  const [Infos, setData] = useState(null);
  const [Permissions, setPermissions] = [{
    AddEditDelOp:useState(false),
    viewDelOp:useState(false),
    AssgnRemDriv:useState(false),
    addRemRoute:useState(false),
    UpdateBusInfo:useState(false),
    UpdateProf:useState(false),
   }];

  useEffect(() => {
    fetch('http://localhost:8000/Permissions')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      })
  }, [])

//

// Permissions.map((Perm)=>(
//     loadForm()
//   ))

function loadForm(info) {
  const Perm= info.Permissions;
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
    
  // let i, j;
  // for (i = 0; i < 3; i++) {
  //   for (j = 0; j < 5; j++) {
  //     if ( == 'true') {
  //       if (j == 0) {
  //         document.getElementById('read' + (i + 1)).checked = true;
  //       }
  //       else if (j == 1) {
  //         document.getElementById('add' + (i + 1)).checked = true;
  //       }
  //       else if (j == 2) {
  //         document.getElementById('edit' + (i + 1)).checked = true;
  //       }
  //       else if (j == 3) {
  //         document.getElementById('delete' + (i + 1)).checked = true;
  //       }

  //     }
  //   }
  // }
}
function submitForm(id) {
  const OneInput = document.getElementById('One'+id);
  Permissions.AddEditDelOp = OneInput.checked ? true : false;
  const TwoInput = document.getElementById('Two'+id)
  Permissions.viewDelOp = TwoInput.checked ? true : false;

  const ThreeInput = document.getElementById('Three'+id)
  Permissions.AssgnRemDriv = ThreeInput.checked ? true : false;

  const FourInput = document.getElementById('Four'+id)
  Permissions.addRemRoute = FourInput.checked ? true : false;
  const FiveInput = document.getElementById('Five'+id)
  Permissions.UpdateBusInfo = FiveInput.checked ? true : false;
  const SixInput = document.getElementById('Six'+id)
  Permissions.UpdateProf = SixInput.checked ? true : false;

  const role = Permissions ;


  console.log('Role:', role)
  fetch('http://localhost:8000/Permissions/'+id, {
    method: 'PATCH',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      {
      "Permissions": {"AddEditDelOp":Permissions.AddEditDelOp,"viewDelOp":Permissions.viewDelOp, "AssgnRemDriv":Permissions.AssgnRemDriv,"addRemRoute":Permissions.addRemRoute,"UpdateBusInfo":Permissions.UpdateBusInfo,"UpdateProf":Permissions.UpdateProf}         // we are changing the "likes" value to 5
      }
    )
  }).then(() => {
    console.log('new role added');
  })

}
function Delete(id){
  fetch('http://localhost:8000/Permissions/' + id, {
    method: 'DELETE'
  }).then(() => {
    window.reload()
  }) 
}

  return(
    <div className="flex flex-col relative">
   <table id='Wtable' className=" table-auto sm:shadow-2xl border-collapse w-fullxx" >
  <thead className="sm:hidden"> 
    <tr className="mb-12 text-xl text-blue-700 border-solid border-2 border-black">
          <th className="">Role name</th>
          <th classname="colspan=4" >Permissions</th>
          <th classname="colspan=2 " >Actions</th>
        </tr>
        </thead>
        <tbody>
          {Infos && Infos.map((info)=>(
             setTimeout(() => {
              loadForm(info)
            }, "1000"),
                    <tr className="mb-12  h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
                    <td className="text-lg font-bold "><input type="text" id='role1' placeholder={info.Role} />
                      <h3>
                        Description:  <br />
                        {info.Description}
                      </h3>
                    </td>
                    <td className="flex flex-col text-lg sm:text-sm">
                      <h1 className="font-bold text-blue-700">Permissions</h1>
                      <td className="flex"><input type="checkbox" id={'One'+info.id} className="mt-2 mr-2 " />Add,Edit,Delete Operator</td>
                      <td className="flex"><input type="checkbox" id={'Two'+info.id}  className="mt-2 mr-2" />View Operators</td>
                      <td className="flex"><input type="checkbox" id={'Three'+info.id}  className="mt-2 mr-2" />Assign,Remove Driver to bus</td>
                      <td className="flex"><input type="checkbox" id={'Four'+info.id}  className="mt-2 mr-2" />Add,Remove route </td>
                      <td className="flex"><input type="checkbox" id={'Five'+info.id}  className="mt-2 mr-2" />Update Bus status</td>
                      <td className="flex"><input type="checkbox" id={'Six'+info.id}  className="mt-2 mr-2" />Update profile</td>
                    </td>
                    <td className='pl-8'>
                      <td>
                        <button onClick={()=>submitForm(info.id)}>
                          <Icon icon="carbon:change-catalog" color="green" />
                        </button>
                      </td>
                      <td>
                      <button onClick={()=>Delete(info.id)}>
                          <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
                      </button>
                      </td>
                    </td>
              </tr>
          ))}
  </tbody>
</table>
      <button className="m-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
        <Link to={"add"} >
          Add New Role
        </Link>


      </button>
    </div>
  )
}
export default setRoles;