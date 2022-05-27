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
    updateRoute: (state, action) => {
      state.value.map((route) => {
        if (route.id === action.payload.id) {
          route.routeno = action.payload.routeno;
          route.from = action.payload.from;
          route.to = action.payload.to;
          route.no_of_stations=action.payload.no_of_stations;
          route.stations=action.payload.no_of_stations;
          route.price=action.payload.no_of_stations;

        }
      });
    },
  },
});

export const {addRoute,updateRoute,DeleteRoute } = routesSlice.actions;

export default routesSlice.reducer;