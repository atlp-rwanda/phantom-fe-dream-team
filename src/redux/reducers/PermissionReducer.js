import React, { useState, useEffect } from "react";
import { act } from "react-dom/test-utils";
const PermissionReducer = (state=1, action) => {
 const Npermissions=action.permissions                                          ;
 const id =action.ID;//for update
 const ID=action.ID //for delete
 const role=action.ROLE

  switch (action.type) {
    case "UpdatePermission" :
      fetch('http://localhost:8000/Permissions/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Npermissions)
      }).then(() => {
      })   
      break;
      return state  
      case "DeleteRole":
        fetch('http://localhost:8000/Permissions/' + ID, {
            method: 'DELETE'
          }).then(() => {
          }) 
        break;
      case "AddRole":
        fetch('http://localhost:8000/Permissions/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(role)
          }).then(() => {
            
          })    
       break;
   default:
     return state  
     break; 
  }
  
  }
  export default PermissionReducer;