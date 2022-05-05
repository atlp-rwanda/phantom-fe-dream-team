import { createSlice } from "@reduxjs/toolkit";

const data= [
  { id:1,Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 },
  { id:2,Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 },
  {id:3, Routeno: 502, from: "nyabugogo", to: "town", no_of_stations: 3, stations: "stations", price: 245 }
];

const routesSlice = createSlice({
  name: "routes",
  initialState:{value:data},
  reducers: {
    addRoute(state, action) {
      state.value.push(action.payload);
    },
    DeleteRoute(state, action) {
      state.value = state.value.filter((route) => route.id !== action.payload.id);
    },
    updateRoute: (state, action) => {
      state.value.map((route) => {
        if (route.id === action.payload.id) {
          route.routeno = action.payload.routeno;
          route.from = action.payload.from;
          route.to = action.payload.to;
        }
      });
    },
  },
});

export const {addRoute,updateRoute,deleteRoute } = routesSlice.actions;

export default routesSlice.reducer;