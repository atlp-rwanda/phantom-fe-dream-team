import { createSlice } from "@reduxjs/toolkit";


 import { Roadsdata } from "../../components/RoutesDashboard/dummydata";

const routesSlice = createSlice({
  name: "routes",
  initialState:{value:Roadsdata},
  reducers: {
    addRoute(state, action) {
      state.value.push(action.payload);
    },
    DeleteRoute:(state, action) => {
      state.value = state.value.filter((route) => route.id !== action.payload.id);
    },
    updateRoute:(state, action) => {
      state.value.map((route) =>{
        if(route.id === action.payload.id) {
          route.routeNo = action.payload.routeNo;
          route.from = action.payload.from;
          route.to = action.payload.to;
          route.noOfStations=action.payload.noOfStations;
          route.stations=action.payload.stations;
          route.price=action.payload.price;
        }
      });
    },
  },
});



export const {addRoute,updateRoute,DeleteRoute } = routesSlice.actions;

export default routesSlice.reducer;




