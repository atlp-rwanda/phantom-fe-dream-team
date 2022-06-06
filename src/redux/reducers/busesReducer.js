import { createSlice} from "@reduxjs/toolkit";
import data from "../../components/RegisterBuses/database.json";


const initialState = { value: data }

const busesReducer = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addBus: (state, action) => {
            state.value.push(action.payload);
          },
        deleteBus: (state, action) => {
            state.value = state.value.filter((bus) => bus.id !== action.payload.id);
          },
          updateBuses: (state, action) => {
            state.value.map((bus) => {
              if (bus.id === action.payload.id) {
                bus.plateNo = action.payload.plateNo;
                bus.routeNo = action.payload.routeNo;
                bus.busType = action.payload.busType;
                bus.seats= action.payload.seats
              }
            });
          }
    }
})

export const selectAllPosts = (state) => state.busesReducer.value;

export const { addBus,deleteBus,updateBuses } = busesReducer.actions

export default busesReducer.reducer