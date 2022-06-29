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
      }).then(() => {
        
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