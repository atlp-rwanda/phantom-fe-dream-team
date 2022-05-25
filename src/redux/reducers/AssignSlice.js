import { createSlice } from "@reduxjs/toolkit";

const data= [
    // {
    //     "Plate": "RAA 356 W",
    //     "Driver": "Ishimwe Bruno"
    //   },
    //   {
    //       "Plate": "RAB 578 G",
    //       "Driver": "Ishimwe Fabrice"
    //   },
    //   {
    //       "Plate": "RAC 786 T",
    //       "Driver": "Kirenga Frank"
    //   },
    //   {
    //       "Plate": "RAD 753 K",
    //       "Driver": "Kalisa John"
    //   },
    //   {
    //       "Plate": "RAB 356 S",
    //       "Driver": "Ishimwe Charles"
    //   },
    //   {
    //       "Plate": "RAC 356 P",
    //       "Driver": "Kwizera Christian"
    //   }
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