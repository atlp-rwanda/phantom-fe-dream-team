
import React, { useState, useEffect } from "react";
import {backendUrl} from "../../utils/Api.js"
const BusesReducer = (state=1, action) => {                                        ;
 const id =action.ID;//for update
 const ID=action.ID //for delete
 var loggedin =  localStorage.getItem("auth-token")
 localStorage.setItem("error",null);


  switch (action.type) {
    case "UpdateBus" :
      const update = action.BUs
      console.log(update)
      const id = action.Id
      fetch(backendUrl+"buses/" + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
        body: JSON.stringify(
          update
        )
      }).then((res) => {
        if(res.status!=200){
          localStorage.setItem("error",res);
        }
      }) 
      return state  
      case "DeleteBus":
        fetch(backendUrl+'buses/'+ ID, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
          }).then((res) => {
            if(res.status!=200){
              localStorage.setItem("error",res);
            }
          }) 
          return state  
      case "AddBus":
        const bus=action.BUS
        fetch(backendUrl+'buses', 
        { method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
            body: JSON.stringify(bus)
          }).then((res) => {
            if(res.status!=200){
              localStorage.setItem("error",res);
            }
         
          })
        return state  
   default:
     return state  
  }
  
  }
  export default BusesReducer;