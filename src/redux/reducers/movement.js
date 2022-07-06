import { act } from "react-dom/test-utils";


const Movements = (state ={} , action) => {
  switch (action.type) {
    case "isMoving":
    state=action.AllData;
    const data=action.AllData;
    fetch('http://localhost:8000/CarInRoad/', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log(res)
      })    
      return state;
      case "isPaused":
        const Ndata=action.AllData;
        const id=Ndata.id;
        state=action.AllData;
        fetch('http://localhost:8000/CarInRoad/' + id, {
          method: 'PATCH',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            {
            "speed": Ndata.speed, "passangers":Ndata.passangers,"current_Loc":Ndata.current_Loc,"time_Updated":Ndata.time_Updated
            }
          )
        }).then(() => {
          console.log('role and permissions updated');
        })
          return state;
          case "isResumed":
            const nData=action.AllData;
            const Id=nData.id;
            state=action.AllData;
            fetch('http://localhost:8000/CarInRoad/' + Id, {
              method: 'PATCH',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(
                {
                "speed": nData.speed, "passangers":nData.passangers,"time_Updated":nData.time_Updated
                }
              )
            }).then(() => {
              console.log('role and permissions updated');
            })
              return state;

    case "clearIsmoving":
        const ID=action.id
        fetch('http://localhost:8000/CarInRoad/' + ID, {
            method: 'DELETE'
          }).then(() => {
          }) 

    default:
      return state;
  }
};
export default Movements;