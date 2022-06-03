import { createSlice } from "@reduxjs/toolkit";

const data= [

];

const assignSlice = createSlice({
  name: "assign",
  initialState:{value:data},
  reducers: {
        addAssign(state, action) {
        state.value.push(action.payload);
        },

        DeleteAssign(state, action) {
            state.value = state.value.filter((assign) => assign.id !== action.payload.id);
        },
        updateAssign: (state, action) => {
            state.value.map((assign) => {
            if (assign.id === action.payload.id) {
                assign.assignPlate = action.payload.assignPlate;
                assign.assignDriver = action.payload.assignDriver;
            
          }
        });
      },
    
  },
});

export const {addAssign, DeleteAssign} = assignSlice.actions;

export default assignSlice.reducer;