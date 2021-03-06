import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import SkeletonUI from '../skeletonUI'
import { setPermission, deleteBus } from "../../redux/actions/index";
import TopNavbar from "../Dashboard/TopNavbar";
import {backendUrl} from "../../utils/Api.js"
import {updateBus} from "../../redux/actions/index"
import SuccefullPopup from '../succesfull';
import ErrorPopup from "../error";
function Buses() {
  const dispatch = useDispatch();
  const [succeed, setSucceed] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)
  const [load,setLoad] = useState(false)
  const [load1,setLoad1] = useState(false)
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
    fetch(backendUrl+'buses', 
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

    setLoad(true)
    console.log(Infos,'id',id)
    let obj = Infos.find(o => o.id === id);
    var update ={
      plate:document.getElementById('plate'+id).value || obj.plate,
      busType:document.getElementById('type'+id).value || obj.busType,
      seat:document.getElementById('seat'+id).value || obj.seat
    } 
    if (update != '') {
        dispatch(updateBus(update,id))
        console.log(update)
        setTimeout(() => {
          const error = localStorage.getItem("error");
          if(error!="null"){
            setLoad(false)
            setError(true)
          }else{
            setLoad(false)
            setSucceed(true)
          }
        }, 1000);
 
    }
    }


  function Delete(id) {
    if (confirm('Are you sure to delete this bus?')) {
      setLoad1(true)
      dispatch(deleteBus(id));
    setTimeout(() => {
    const error = localStorage.getItem("error");
      if(error!="null"){
        setLoad1(false)
        setError(true)
      }else{
        setLoad1(false)
        setSucceed(true)
      }
    }, 1000);
    }
  }
  function Editable(id) {
    document.getElementById('plate'+id).readOnly = false;
    document.getElementById('type'+id).readOnly = false;
    document.getElementById('seat'+id).readOnly = false;
    
 
  }
  function Sort(I){
   I.sort((a, b) => {
      return a.id - b.id;
  });
  console.log(I)
  }
  function close() {
    setSucceed(false)
    window.location.reload()
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
                <th className="colspan=2 pr-[100px] sm:hidden" >Type</th>
                <th className="colspan=2  pr-[140px] sm:hidden" >Seats</th>
                <th className="colspan=2  pr-[100px] sm:hidden" >Date added</th>
                <th className="colspan=2  sm:hidden" >Action</th>
              </tr>
            </thead>
            <tbody>
              {error && <div className="flex content center text-lg text-red-500 pl-8 " >{error}</div>}
              {loading && <SkeletonUI />}
              {Infos && Sort(Infos)}
              {Infos && Infos.map((info) => (
                setTimeout(() => {
                }, "1000"),
                ij+=1,
                
                <tr className="mb-12  h-8 text-xl hover:border-solid border-solid border-2 border-black hover:border-2 hover:border-blue-600  sm:mb-4" onClick={() => Editable(info.id)}>
                  <td className="text-lg font-bold  sm:text-sm sm:w-4 ">

                      {ij}
                  </td>
                  <td className="flex flex-col text-lg sm:text-sm">
                  <input type="text" id={'plate' + info.id} placeholder={info.plate} className="font-bold placeholder-black mt-4" readOnly />
                  </td>
                  <td className='pl-8 sm:flex'>
                  <input type="text" id={'type' + info.id} placeholder={info.busType} className="font-bold placeholder-black" readOnly />
                  </td>
                  <td className='pl-8 sm:flex'>
                  <input type="text" id={'seat' + info.id} placeholder={info.seat} className="font-bold placeholder-black" readOnly />
                  </td>
                  <td className='pl-8 sm:flex'>
                  {info.createdAt}
                  </td>
                  <td className='pl-8 sm:flex'>
                    <td>
                      {!load &&
                      <button onClick={() => submitForm(info.id)}>
                       <Icon icon="carbon:change-catalog" color="green" />
                      </button>}
                      {load &&
                      <button onClick={() => submitForm(info.id)}>
                        <Icon icon="eos-icons:bubble-loading" color="green" width="30" />
                      </button>}
                    </td>
                    <td>
                      {!load1 &&
                      <button onClick={() => Delete(info.id)}>
                        <Icon icon="fluent:delete-28-regular" width="24" color="red" className='text-red' />
                      </button>}
                      {load1 &&
                      <button onClick={() => Delete(info.id)}>
                        <Icon icon="eos-icons:bubble-loading" color="red" width="30" className='text-red' />
                      </button>}

                    </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

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
export default Buses;