import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import UserBusTracker from './BusTrackerUser';
import RoutingMachine from './RoutingMachine';
import "../../App.css";

const UserSimulation = () => {
  window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
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
  const loggedin =  localStorage.getItem("auth-token")
  const [Infos, setData] = useState(null);
  const [newInfos, setNewInfos] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3200/api/v1/simulate/alltracks/bus',
{method: 'GET',
 headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`}}
)
.then(res => {

  return res.json();
}).then((res) =>{
setData(res);
})
  }, []);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);
  const movementInfo = useSelector(state => state.isMoving);
  const speed = useSelector( (state) => state.SpeedReducer.value);
  function FindAcar(org,dest){

    console.log("Find car function",Infos)
    var a=0,i=0,b=-1;
    Infos && Infos.map((info) => (
      setTimeout(() => {
        i++;
        b=Infos.length;
        console.log("Data", info)
        if(info.route_Id==org+dest){
          console.log("They are the time ", parseInt(info.current_Loc))
          localStorage.setItem('UserD',info.email)
          a=1;
          startBus(info.time_Start,info.route_Id,info. speed,parseInt(info.current_Loc),parseInt(info.Time_updated));
        }
        else if(a==0 && i==b){
          return alert("No bus in your route for now!")
        }
      }, 100)))
  }
  var a,b
  const handleRoute = (e) => {
    e.preventDefault();
    options.filter((option) => {
      const startingPoint = option.name === e.target.origin.value;
      if (startingPoint) {
        setOrigin(option.coordinates);
       a=option.name
      }
    });
    options.filter((option) => {
      const endingPoint = option.name === e.target.destination.value;
      if (endingPoint) {
        setDestination(option.coordinates);
       b=option.name
      }
    });
    FindAcar(a,b);
  
  };

  let cursor = 0;

  const [currentTrack, setcurrentTrack] = useState(null);
  function startBus(S_T,id,speed,U_L,U_T){
    var i,startI

  const d = new Date();
    d.getTime()
    console.log("start",U_T)
    if(U_T==0){
      startI=(d.getTime()-S_T)/(10000/speed)
      console.log("if",startI)
      if(speed==0){ 
        i = U_L
        console.log(i)
      }else{
        i = U_L+Math.round(startI)
        console.log("else",startI)
      }
    }else{
      startI=(d.getTime()-U_T)/(10000/speed)
      i=Math.round(startI)
    }
    console.log(i)
    console.log("The bus started at  ",S_T)
    rMachine.current.on('routeselected', (e) => {
      const coorPoints=e.route.coordinates;
      const allPoints = (coorPoints.reduce((a, obj) => a + Object.keys(obj).length, 0))/2;
      var sped,Npassangers,time_Updated 
      setInterval(() => {

        console.log(id)
        //Get information of ongoing bus
fetch('http://localhost:3200/api/v1/simulate/'+id,
{method: 'GET',
 headers: { "Content-Type": "application/json",'Authorization': `Bearer ${loggedin}`}}
)
.then(res => {
  if (!res.ok) { // get the error from server
    throw Error('could not fetch the data for that resource');
  }
  return res.json();
})
.then(data => {
  sped = data[0]. speed
  Npassangers = data[0]. passangers
  time_Updated = data[0]. time_Updated
  setNewInfos(data);
}).catch(err => {
  // cathes Network/connection error
  setLoading(false);
  setError(err.message);
})
      localStorage.setItem("passangers",Npassangers)
        {
          if (sped == 0) {
            clearInterval()
          }
          else if (i <= allPoints) {
            setcurrentTrack(coorPoints[i]);
            console.log(coorPoints[allPoints - 1], ' and ', coorPoints[i])
            if (coorPoints[i] == coorPoints[allPoints - 1]) {
              dispatch(movement(data.id, -5));
              alert("Reached the destination 👍")
              clearInterval()
              window.location.reload()
            }
            i++
          }
        }
      }
        , 10000 / speed)
  })}

  useEffect(() => {
    if (origin && destination && rMachine.current) {
      rMachine.current.setWaypoints([L.latLng(origin), L.latLng(destination)]);
    }
  }, [origin, destination]);



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
     <div className='absolute flex flex-col'>


        <form
          id="form"
          onSubmit={handleRoute}
          className="fixed z-20 justify-center "
          bg-gray-500
        >
          <div className="flex flex-col  p-4 md:items-baseline opacity-75">
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

          </div>
          </div>

        </form>

        <div className="ml-2 text-center z-10 mt-[2px] h-screen">
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
              <UserBusTracker data={currentTrack} />
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

export default UserSimulation;