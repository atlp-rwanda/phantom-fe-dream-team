import React, { useState, useEffect } from "react";
const BusesReducer = (state=1, action) => {                                        ;
 const id =action.ID;//for update
 const ID=action.ID //for delete
 var loggedin =  localStorage.getItem("auth-token")

  switch (action.type) {
    case "UpdateBus" :
      fetch('https://phantom-be.herokuapp.com/api/v1/buses/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Npermissions)
      }).then(() => {
      })   
      return state  
      case "DeleteBus":
        fetch('https://phantom-be.herokuapp.com/api/v1/buses/'+ ID, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
          }).then(() => {
          }) 
          return state  
      case "AddBus":
        const bus=action.BUS
        fetch('https://phantom-be.herokuapp.com/api/v1/buses', 
        { method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
            body: JSON.stringify(bus)
          }).then((res) => {
            console.log(res)
          })
        return state  
   default:
     return state  
  }
  
  }
  export default BusesReducer;