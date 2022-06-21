import React from 'react'
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { DeleteRoute } from '../../redux/reducers/routesSlice';

export default function readOnly({route,handleEditClick}) {

    const dispatch=useDispatch();
  return (
<tr>
<td className='px-10 py-6 sm:text-xs text-black'>{route.routeNo}</td>
<td className='px-10 py-6 sm:text-xs  text-black'>{route.from}</td>
<td className='px-10 py-6 sm:text-xs text-black'>{route.to}</td>
<td className='px-10 py-6 sm:text-xs text-black'>{route.noOfStations}</td>
<td className='px-10 py-6 sm:text-xs text-black'>{route.stations}</td>
<td className='px-10 py-6 sm:text-xs text-black'>{route.price}</td>
<td className='flex px-10 py-6 sm:text-xs'>
 
    <Icon 
       onClick={(event)=>handleEditClick(event,route)} 
    
    icon="ci:edit" width="24"  color='green' />



    <Icon
      onClick={() => {
         dispatch(DeleteRoute({ id: route.id }));
   
      }}

      icon="fluent:delete-28-regular" width="24" color='red' />



</td>
</tr>

  )
}



