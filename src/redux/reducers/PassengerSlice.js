import { createSlice } from "@reduxjs/toolkit";

const data= 0;

const PassengerSlice= createSlice({
  name: "passenger",
  initialState:{value:data},
  reducers: {
     addPassenger(state, action) {
        state.value+1;
        },
        removePassenger(state, action) {
            state.value-1;
            }
  },
});

export const {addPassenger, removePassenger} = PassengerSlice.actions;

export default PassengerSlice.reducer;