import { act } from "react-dom/test-utils";
import {backendUrl} from "../../utils/Api.js"


const Movements = (state ={} , action) => {
  const loggedin =  localStorage.getItem("auth-token")
  switch (action.type) {
    case "isMoving":
    state=action.AllData;
    const data=action.AllData;
    fetch(backendUrl+'simulate/start/', {
      method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
        body: JSON.stringify(data)
      }).then((res) => {
        console.log(res)
      })    
      return state;
      case "isPaused":
        const Ndata=action.AllData;
        const id=Ndata.id;
        state=action.AllData;
        fetch(backendUrl+'simulate/update/'+id, {
          method: 'PATCH', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
          body: JSON.stringify(
            {
            "speed": 0, "passangers":Ndata.passangers,"current_Loc":Ndata.current_Loc,"Time_updated":Ndata.time_Updated
            }
          )
        }).then((res) => {
          console.log('paused',Ndata);
        })
          return state;
          case "isResumed":
            const nData=action.AllData;
            const Id=nData.id;
            state=action.AllData;
            fetch(backendUrl+'simulate/update/'+Id, {
      method: 'PATCH', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
              body: JSON.stringify(
                {
                "speed": nData.speed, "passangers":nData.passangers,"Time_updated":nData.time_Updated
                }
              )
            }).then(() => {
              console.log('updated');
            })
              return state;

    case "clearIsmoving":
        const ID=action.id
        fetch(backendUrl+'simulate/stop/'+ID, {
          method: 'POST', headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`,},
          }).then(() => {
          }) 

    default:
      return state;
  }
};
export default Movements;