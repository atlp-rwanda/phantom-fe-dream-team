import { createSlice } from "@reduxjs/toolkit";
const data= [
    {id:1,name:"shemalucien",role:"driver",permissions:"read,add,edit,delete"}
];
const rolesSlice = createSlice({

  name: "roles",

  initialState:{value:data},

  reducers: {
    searchName: (state, action) => {
        state.searchedUser = [];
        state.searchedUser.push(action.payload)
    },
    addRole(state, action) {

      state.value.push(action.payload);

    },

    DeleteRole(state, action) {

      state.value = state.value.filter((role) => role.id !== action.payload.id);

    },

    updateRole: (state, action) => {

      state.value.map((role) => {

        if (role.id === action.payload.id) {

          role.name = action.payload.name;
          role.role = action.payload.role;
        }

      });

    },

  },

});




export const {searchName,addRole,DeleteRole,updateRole } = rolesSlice.actions;




export default rolesSlice.reducer; 