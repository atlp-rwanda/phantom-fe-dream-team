import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import BusTracker from './BusTracker';
import RoutingMachine from './RoutingMachine';
import Logout from '../Logout/logout';
import { addPassenger, removePassenger } from '../../redux/reducers/PassengerSlice';
import { Decelerate, Accelerate} from '../../redux/reducers/SpeedSlice';
import {movement} from "../../redux/actions/movement.js";



const TrackingPage = () => {
  const options = [
    {
      name: 'Nyabugogo',
      coordinates: { lat: -1.936671, lng: 30.053524 }
    },
    {
      name: 'Kimironko',
      coordinates: { lat: -1.9362376, lng: 30.130060100000037 }
    },
    {
      name: 'Nyanza',
      coordinates: { lat: -2.0007591860478864, lng: 30.09273823239436 }
    },
    {
      name: 'Remera',
      coordinates: { lat: -1.9585082793047428, lng: 30.119018946877382 }
    },
    {
      name: 'Down-Town',
      coordinates: { lat: -1.9433247022379925, lng: 30.057306224487732 }
    }
  ];
  const dispatch = useDispatch();
  const passengers= useSelector( (state) => state.PassengerReducer.value);
  const speed = useSelector( (state) => state.SpeedReducer.value);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);
  const [start, setStart] = useState(false);
  const UserEmail = localStorage.getItem('user')
  const [setSpeed] = useState("");
  var OriginName, DestName;
  const handleRoute = (e) => {

    e.preventDefault();
    options.filter((option) => {
      const startingPoint = option.name === e.target.origin.value;
      if (startingPoint) {
        setOrigin(option.coordinates);
      }
    });
    options.filter((option) => {
      const endingPoint = option.name === e.target.destination.value;
      if (endingPoint) {
        setDestination(option.coordinates);
      }
    });
  };

  let cursor = 0;
  let id=Math.round(Math.random()*100000)

  const [currentTrack, setcurrentTrack] = useState(null);

  useEffect(() => {
    if (origin && destination && rMachine.current) {
      rMachine.current.setWaypoints([L.latLng(origin), L.latLng(destination)]);
    }
  }, [origin, destination]);

  const d = new Date();
  function stop(){
      localStorage.setItem("spe",0);
  }
  function resume(){
    localStorage.setItem("spe",1);
}

function startBus(i){
  localStorage.setItem("spe",1);
  OriginName=document.getElementById('origin').value;
  DestName=document.getElementById('destination').value;
  const data ={
    "id":id,
    "timeStart":d.getTime(),
    "speed": speed,
    "from":OriginName,
    "to":DestName,
    "email": UserEmail,
    "passangers":passengers,
    "carDriving":"RAC508E"
  }
  rMachine.current.on('routeselected', (e) => {
    const coorPoints=e.route.coordinates;
    const allPoints = (coorPoints.reduce((a, obj) => a + Object.keys(obj).length, 0))/2;
   var i=localStorage.getItem('i'+id)
   if(i==undefined){
     i=0
   }
   setInterval(() => {
     
   ;
    
        const sped= Number(localStorage.getItem("spe"))
      {if(sped==0){
        localStorage.setItem("i"+data.id,i); 
        clearInterval()
      }
      else if(i<=allPoints){
            setcurrentTrack(coorPoints[i]);
            console.log(coorPoints[allPoints-1],' and ',coorPoints[i])
            if(coorPoints[i]==coorPoints[allPoints-1]){
              alert("Reached the destination 👍")
              dispatch(movement(data.id,-5));
              window.location.reload()
            }
            i++
      }
      }
      }
    , 4000/speed)

})
dispatch(movement(data,1));
console.log(movementInfo)
}

//EXAMPLE




  function handlestop(){
      //  return handlestart(0);
      alert("Stopped")
       rMachine.current.off('routeselected', (e) => {
          window.clearInterval();
          const coor = e.route.coordinates;
          setcurrentTrack(coor[cursor]);
            setInterval(() => {
              if (cursor === coor.length - 1) {
                setTimeout(() => {
                  cursor = 0;
                  setcurrentTrack(coor[cursor]);
                }, 1000);
              }
              if(1==0){
                cursor++;
              }
              else{
                window.clearInterval();
                setcurrentTrack(coor[cursor]);
                setStart(false);
              }
              setcurrentTrack(coor[cursor]);
            }, 100000); //Speed
        });
  }

  const handleChange = (e) => {
    const { value } = e.target;
    const optionNames = selectDes.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  const handleChangeDes = (e) => {
    const { value } = e.target;
    const optionNames = selectOne.current.options;
    Object.keys(optionNames).forEach((key) => {
      const option = optionNames[key];
      if (option.value === value) {
        option.disabled = true;
      } else {
        option.disabled = false;
      }
    });
  };

  const addPassengers = () => {
    if (start == false) {
      // setPassengers((prev) => prev + 1);
      dispatch(addPassenger());
     if(passengers==30){
      alert("The bus is full");
     }
    }
    else {
      alert("The bus is moving");
    }

  };
//   const handleClick = () => {
//     dispatch(logout());
// }

  const removePassengers = () => {
    if (passengers !== 0 && start == false) {
      // setPassengers((prev) => prev - 1);
      dispatch(removePassenger());
      alert("Removed one Passenger");
    }
    else if (start == true) {
      alert("The bus is moving");
    }
    else {
      alert("No Passengers To Remove");
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const userLocation = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        setposition(userLocation);
      });
    }
  }, []);
  return (
    <>
      <Logout />
      <div className='absolute flex flex-col'>

        <div  className="fixed z-30 justify-center "
          bg-gray-500>
        <form
          id="form"
          onSubmit={handleRoute}
        >
          <div className="flex flex-col bg-blue-700 p-4 md:items-baseline opacity-75">
            <select
              type="text"
              id="origin"
              name="origin"
              ref={selectOne}
              onChange={handleChange}
              placeholder="your current location"
              className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1 h-10 w-10 md:w-56 border-2"
            >
              <option id="origin-select">Select Origin</option>
              {options.map((option) => {
                return (
                  <option
                    value={option.name}
                    key={option.name}
                    className="cursor-pointer bg-transparent font-bold font-raleway disabled:text-gray-400 disabled:bg-gray-100"
                  >
                    {option.name}
                  </option>
                );
              })}
            </select>
            <select
              onChange={handleChangeDes}
              type="text"
              id="destination"
              name="destination"
              placeholder="your destination"
              className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1 h-10 w-10 md:w-56 border-2"
              ref={selectDes}
            >
              <option value="" hidden>
                Select Destination
              </option>
              {options.map((option) => {
                return (
                  <option
                    value={option.name}
                    key={option.name}
                    className="cursor-pointer bg-transparent hover:bg-primary font-raleway font-bold disabled:text-gray-400 disabled:bg-gray-100"
                  >
                    {option.name}
                  </option>
                );
              })}
            </select>
            {/* <div type="submit" className="flex justify-center md:ml-16">
             

            </div> */}
            <div className="flex justify-center m-2">
            <button
                type="submit"
                className="bg-green-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              >
                <Icon icon="ic:outline-track-changes" />
              </button>
              <button
                onClick={()=>startBus(0)}
                data-tip="Move Bus"
                className="bg-green-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              >
                <Icon icon="codicon:debug-start" />

              </button>
              
            </div>
              <span className=" m-2 bg-black text-white w-6 h-6  flex justify-center items-center p-4 m-2" >SPEED</span>
            
            <div className=" m-2 bg-black text-white w-6 h-6  flex justify-center items-center p-4 m-2" >
              <span>{speed}</span>
            </div>
            <div className=" flex justify-center  m-2">
              <span className=" bg-black text-white w-6 h-6  flex justify-center items-center p-4  b " >PASSENGERS</span>
            </div>
            <div className="  bg-black text-white w-6 h-6  flex justify-center items-center p-4 " >
              <span>{passengers}</span>
            </div>

          </div>

        </form>
        <div className="flex justify-center m-2 ">
              <button
                onClick={addPassengers}
                className="bg-green-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              ><Icon icon="akar-icons:person-add" />
              </button>
              <button
                onClick={removePassengers}
                className="bg-red-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              ><Icon icon="eva:person-remove-fill" />
              </button>
              <button
  onClick={() => {
    dispatch(
      Decelerate()
    );}}
                className="bg-red-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              ><Icon icon="ant-design:backward-filled" />
              </button>
        <button
             onClick={() => resume()}
                className="bg-green-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              ><Icon icon="codicon:refresh" color="white" />
              </button>

              <button
             onClick={() =>{dispatch(Accelerate())}}
                className="bg-green-600 text-white w-6 h-6 flex justify-center items-center p-4 m-2"
              ><Icon icon="dashicons:controls-forward" />
              </button>
        <button
                onClick={()=>stop()}
                data-tip="Stop Bus"
                className="bg-red-600 text-white w-6 h-6  flex justify-center items-center p-4 m-2"
              ><Icon icon="bx:pause" />
              </button>
              
            </div>
              </div>

        <div className="ml-2 text-center z-10 mt-[-10px]">
          <MapContainer
            center={{ lat: -1.936671, lng: 30.053524 }}
            zoom={13}
            zoomControl={false}
            className="h-[88vh] w-[100vw]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ZoomControl position="topright" />
            {origin && destination && currentTrack ? (
              <BusTracker data={currentTrack} />
            ) : (
              ''
            )}

            {origin && destination ? (
              <RoutingMachine
                ref={rMachine}
                origin={origin}
                destination={destination}
                userPosition={position}
              />
            ) : (
              ''
            )}
          </MapContainer>
        </div>
      </div>

    </>
  );
};  

export default TrackingPage;