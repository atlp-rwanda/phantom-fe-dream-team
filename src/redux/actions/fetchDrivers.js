
import axios from "axios";
import { FetchDriversAction, AddDriversAction } from "./DriversAssign";

export const thunkCreatorsFunctionFetchingAllData = () => {
    // this is the actual redux which is being returned 
  return async function getAllDataThunk(dispatch, getState) {
      fetch('http://localhost:8000/assignDrivers')
            .then(res => {
                if (!res.ok) { // get the error from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
               dispatch(FetchDriversAction(data));
            }).catch(err => {
            console.log(err);
            })   
    }
  };
export const DataPostingInsideJsonServer = (dataFromForm) => {
  // this is the actual redux which is being returned when the action creator is created 
//   and it is passed inside in store.dispatch(thunk);
  return async function postDataThunk(dispatch, getState) {
    // {Driver,Plate}
    fetch('http://localhost:8000/assignDrivers', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataFromForm)
      }).then(() => {
          dispatch(AddDriversAction(dataFromForm));
        window.location.assign("./Assign")
        // setSucceed(true);
      })
  };
};








