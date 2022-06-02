import React from 'react'

export function FetchDriversAction(allData) {
  return {
    type:"fetchAll",
     payload: allData
  }
}

export function AddDriversAction(data) {
 return {
      type: "addAll",
    payload:data
  } 
}
