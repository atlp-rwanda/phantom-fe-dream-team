// import React, { useState, useEffect } from "react";
const RoutesReducer = (state=1, action) => {                                        ;
    const id =action.ID;//for update
    const ID=action.ID //for delete
    var loggedin =  localStorage.getItem("auth-token")
   
     switch (action.type) {
       case "UpdateBus" :
         fetch('https://phantom-be.herokuapp.com/api/v1/routes/'+id, {
           method: 'PATCH',
           headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
           body: JSON.stringify(Npermissions)
         }).then(() => {
         })   
         return state  
         case "DeleteBus":
           fetch('https://phantom-be.herokuapp.com/api/v1/routes/'+ ID, {
               method: 'DELETE',
               headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
             }).then(() => {
             }) 
             return state  
         case "AddBus":
           fetch('https://phantom-be.herokuapp.com/api/v1/routes', {
               method: 'POST',
               headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`},
               body: JSON.stringify(role)
             }).then(() => {
               
             })    
           return state  
      default:
        return state  
     }
     
     }
     export default RoutesReducer;