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
function SetRoles() {

  const RolesAndPermissions = useSelector(state => state.PermissionReducer);
  const dispatch = useDispatch();
 
  function loadForm(){
    let i,j;
      for(i=0;i<3;i++){
        for(j=0;j<5;j++){
          if(RolesAndPermissions[i][j]=='true'){
            if(j==0){
              document.getElementById('read'+(i+1)).checked = true;
            }
            else if(j==1){
              document.getElementById('add'+(i+1)).checked = true;
            }
            else if(j==2){
            document.getElementById('edit'+(i+1)).checked = true;
            }
            else if(j==3){
            document.getElementById('delete'+(i+1)).checked = true;  
            }

          }
        }
      }
  }
  function TobeCalledAfterRefresh(){
  setTimeout(() => {
    loadForm()
  }, "1000")
}
TobeCalledAfterRefresh()
  var a;
  const { loading } = useLoader();
function Test1(){
 a=1
}
function Test2(){
  a=2
}
function Test3(){
 a=3
}

function submitForm(){
  var Role= document.getElementById('role'+a).value
  var Read,Add,Edit,Delete;


const readInput = document.getElementById('read'+a);
   Read = readInput.checked? true :false;
const addInput = document.getElementById('add'+a)
  Add = addInput.checked? true :false;

const editInput = document.getElementById('edit'+a)
  Edit = editInput.checked? true :false;

const deleteInput = document.getElementById('delete'+a)
  Delete = deleteInput.checked? true :false;


console.log('Role:',Role,'Read:',Read)
  dispatch(setPermission(Role,Read,Add,Edit,Delete))
  window.location.reload();
  
}


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

        <tr onChange={()=>Test1()} className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
        <td className="text-xl font-bold"><input type="text" id='role1' value="Admin" /></td>
          <td className="flex text-lg">
          <td className="flex"><input type="checkbox" id='read1' className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" id='add1' className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" id='edit1' className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" id='delete1' className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
              <button onClick={()=>submitForm()}>
              <Icon icon="carbon:change-catalog" color="green" />
              </button>
            </td>
            <td>
            <Link to={"delete"} >
                <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
              </Link>
            </td>
          </td>
        </tr>
        <tr onChange={()=>Test2()} className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
          <td className="text-xl font-bold"><input type="text" id='role2' value="Operator" /></td>
          <td className="flex text-lg">
            <td className="flex"><input type="checkbox" id='read2' className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" id='add2' className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" id='edit2' className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" id='delete2' className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
            <button onClick={()=>submitForm()}>
              <Icon icon="carbon:change-catalog" color="green" />
              </button>
            </td>
            <td>
              <Link to={"delete"} >
                <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
              </Link>
            </td>
          </td>
        </tr>
        <tr onChange={()=>Test3()} className="mb-12 h-8 text-xl hover:border-solid hover:border-2 border-blue-600 drop-shadow-md hover:drop-shadow-2xl">
          <td className="text-xl font-bold"><input type="text" id='role3' value="Driver" /></td>
          <td className="flex text-lg">
            <td className="flex"><input type="checkbox" id='read3' className="mt-2 mr-2" />Read</td>
            <td className="flex"><input type="checkbox" id='add3' className="mt-2 mr-2" />Add</td>
            <td className="flex"><input type="checkbox" id='edit3' className="mt-2 mr-2" />Edit</td>
            <td className="flex"><input type="checkbox" id='delete3' className="mt-2 mr-2" />Delete</td>
          </td>
          <td className='pl-8'>
            <td>
            <button onClick={()=>submitForm()}>
              <Icon icon="carbon:change-catalog" color="green" />
              </button>
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
          Edit Role name
        </Link>
      </button>
      <button onClick={()=>see()} className="m-12 lg:mt-5 bg-blue-700 text-white hover:bg-white hover:border-solid hover:border-2 hover:border-blue-600  hover:text-blue-700 font-bold py-2 px-8 rounded xl:text-xs  lg:text-base md:text-xs m:text-xs xs:text-xs">
        
          Add Role name
       
      </button>
    </div>
  );
}
export default SetRoles;