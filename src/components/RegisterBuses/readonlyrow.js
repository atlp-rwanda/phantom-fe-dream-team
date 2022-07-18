import React from 'react'
import {useDispatch } from "react-redux";
// import { deleteBus} from "../../redux/reducers/busesReducer";
import { Icon } from '@iconify/react';

export default function readonlyrow({item,handleEditClick}) {
   const dispatch = useDispatch();
  return (
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
   <th scope="row" className="px-12 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
    {item.plateNo}
   </th>
   <td className="px-12 py-4">
   {item.routeNo}
   </td>
   <td className="px-12 py-4">
   {item.busType}
   </td>
   <td className="px-12 py-4">
   {item.seats}
   </td>
   <td className="px-12 py-4">
   <Icon 
     onClick={(event)=>handleEditClick(event,item)}
   icon="ci:edit" width="24" color="green"  />
   </td>
   <td className="px-12 py-4">
           <Icon 
               onClick={() => {
                dispatch(deleteBus({ id: item.id }));
              }}
           icon="fluent:delete-28-regular" width="24" color='red' />
   </td>
</tr>
  )
}
