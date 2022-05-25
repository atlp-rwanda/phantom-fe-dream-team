import React from 'react'
import {useDispatch } from "react-redux";
import { deleteBus} from "../../redux/reducers/busesReducer";

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
   <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline"onClick={(event)=>handleEditClick(event,item)}>Edit</p>
   </td>
   <td class="px-12 py-4">
       <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
           onClick={() => {
             dispatch(deleteBus({ id: item.id }));
           }}
       >Delete</p>
   </td>
</tr>
  )
}
