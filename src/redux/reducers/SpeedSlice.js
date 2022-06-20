import { createSlice } from "@reduxjs/toolkit";

const data= 20;

const SpeedSlice= createSlice({
  name: "speed",
  initialState:{value:data},
  reducers: {
     Accelerate(state) {
        state.value+= 1;
        },
        Decelerate(state) {
            state.value-= 1;
            }
  },
});

export const {Accelerate, Decelerate} =SpeedSlice.actions;

export default SpeedSlice.reducer;