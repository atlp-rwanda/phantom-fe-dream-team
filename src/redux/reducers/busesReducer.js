import { createSlice} from "@reduxjs/toolkit";
import { useState,useEffect } from "react";


const initialState = [
    {
        id: '1',
        plateNo: 'RAC 705 U',
        routeNo: "800",
        busType: "Yutong",
        seats:"30"
     
    },
    {
        id: '2',
        plateNo: 'RAC 795 U',
        routeNo: "801",
        busType: "Yutong",
        seats:"30"
    }
]
// function add (state){
//     const [buses,setBuses]=useState([])
//     setBuses([...buses,state])
//     useEffect(() => {
//         const storedUsers = JSON.parse(localStorage.getItem('buses'))
//         if (storedUsers) setBuses(storedUsers)
//       }, [])
      
//       useEffect(() => {
//         localStorage.setItem('buses', JSON.stringify(buses))
//       }, [buses])
// }
const busesReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
                localStorage.setItem(
                    'buses',
                    JSON.stringify({
                     state
                    })
                  );
            },
            
            // prepare(plateNo,routeNo,busType,seats) {
            //     return {
            //         payload: {
            //             id: nanoid(),
            //             plateNo,
            //             routeNo,
            //             busType,
            //             seats
            //         }
            //     }
            // }
         
        }
    }
})

export const selectAllPosts = (state) => state.busesReducer;

export const { postAdded } = busesReducer.actions

export default busesReducer.reducer