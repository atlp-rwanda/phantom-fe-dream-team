import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from "react";
import { updateRoute } from '../../redux/reducers/routesSlice';
import {  useDispatch } from "react-redux";
import routes from '../../assets/routes.png';
import AddnewRoutes from '../RoutesDashboard/AddnewRoutes';
import { Link } from 'react-router-dom';
function UpdateRoute({editFormData, handleCancelClick,handleEditFormChange,route,handleEditFormSubmit}) {
 
    



    return (
  

<tr>
<td className='px-10 py-6 sm:text-xs' >

<input type="text" name="routeNo" placeholder="504" value={editFormData.routeNo}
                          onChange={handleEditFormChange}
                  className='w-[100px] border-2 border-black' />

</td>
<td className='px-10 py-6 sm:text-xs'>

<input type="text" name="from" placeholder="Nyabugogo" value={editFormData.from}
                 onChange={handleEditFormChange}
                className='w-[100px] border-2 border-black' />

</td>
<td className='px-10 py-6 sm:text-xs '>
<input type="text" name="to" placeholder="Nyabugogo" value={editFormData.to}
                 onChange={handleEditFormChange}
                className='w-[100px] border-2 border-black' />

</td>

<td className='px-10 py-6 sm:text-xs'>
<input type="text" name="noOfStations" placeholder="10" value={editFormData.noOfStations}
                 onChange={handleEditFormChange}
                
                className='w-[100px] border-2 border-black'  />

</td>
<td className='px-10 py-6 sm:text-xs'>
<input type="text" name="stations" placeholder="kanogo, Rwandex, Sonatube" value={editFormData.stations}
                onChange={handleEditFormChange}
                className='w-[100px] border-2 border-black' />

</td>
<td className=' px-10 py-6 sm:text-xs'>

<input type="text" name="price" placeholder="325"  value={editFormData.price}
                 onChange={handleEditFormChange}
                className='w-[100px] border-2 border-black'   />
</td>                
 
<td className='flex px-10 py-6 sm:text-xs'>

<Icon 

onClick={(event)=>handleEditFormSubmit(event,route)}

icon="fluent:save-24-filled"  width="24" color="green" /> 


<Icon 

onClick={handleCancelClick}

icon="flat-color-icons:cancel"  width="24" color="green" />

</td>



   
</tr>

    )
        }

export default UpdateRoute;