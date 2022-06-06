import { createSlice} from "@reduxjs/toolkit";
import {Roadsdata} from  "../../components/RoutesDashboard/dummydata"
const initialState = { Roadsdata }
const roadsReducers = createSlice({
    name: 'posts',
    initialState,
    reducers: {
}})




export default roadsReducers