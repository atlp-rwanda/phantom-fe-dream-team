import React from 'react'
// import { updateBuses } from '../../redux/reducers/busesReducer';
// import {useDispatch } from "react-redux";
export default function editablerow({handleCancelClick,editFormData,item,handleEditFormChange,handleEditFormSubmit}) {
  // const dispatch = useDispatch();
  return (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
   <th scope="row" className="px-12 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
      <input
        type="text"
        required="required"
        placeholder="Enter PlateNo..."
        name="plateNo"
        className='w-[100px]'
        value={editFormData.plateNo}
        onChange={handleEditFormChange}
      ></input>
    </th>
    <td className="px-12 py-4">
      <input
        type="text"
        required="required"
        placeholder="Enter RouteNo..."
        name="routeNo"
        className='w-[70px]'
        value={editFormData.routeNo}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td className="px-12 py-4">
      <input
        type="text"
        required="required"
        placeholder="Enter Bus Type..."
        name="busType"
        className='w-[70px]'
        value={editFormData.busType}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td className="px-12 py-4">
      <input
        type="text"
        required="required"
        placeholder="Enter Seats..."
        name="seats"
        className='w-[70px]'
        value={editFormData.seats}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td className="px-12 py-4">
            <p  className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
            onClick={(event)=>handleEditFormSubmit(event,item)}
            >Save</p>
        </td>
        <td className="px-12 py-4">
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline"  onClick={handleCancelClick}>Cancel</p>
        </td>
        </tr>
  )
}
