import React from 'react'
import { Icon } from '@iconify/react';
export default function editablerow({handleCancelClick,editFormData,item,handleEditFormChange,handleEditFormSubmit}) {

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
            <Icon 
            onClick={(event)=>handleEditFormSubmit(event,item)}
            icon="fluent:save-24-filled" color="green"  width="24"/>
        </td>
        <td className="px-12 py-4">
            <Icon 
            onClick={handleCancelClick}
            icon="flat-color-icons:cancel" width="24" />
        </td>
        </tr>
  )
}
