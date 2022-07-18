import { createSlice } from "@reduxjs/toolkit";

const data= 20;

const SpeedSlice= createSlice({
  name: "speed",
  initialState:{value:data},
  reducers: {
     Accelerate(state) {
        state.value+= 5;
        localStorage.setItem("spe",state);
        },
        Decelerate(state) {
            state.value-= 5;
        localStorage.setItem("spe",state);
            }
  },
});

export const {Accelerate, Decelerate} =SpeedSlice.actions;

export default SpeedSlice.reducer;