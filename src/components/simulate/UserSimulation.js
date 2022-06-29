import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import UserBusTracker from './BusTrackerUser';
import RoutingMachine from './RoutingMachine';

const UserSimulation = () => {
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
  const [Infos, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8000/CarInRoad')
      .then(res => {
        if (!res.ok) { // get the error from server
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setError(null);
      }).catch(err => {
        // cathes Network/connection error
        setLoading(false);
        setError(err.message);
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
    console.log("Find car function")
    var a=0,i=0,b=-1;
    Infos && Infos.map((info) => (
      setTimeout(() => {
        i++;
        b=Infos.length;
        if(info.from==org && info.to==dest){
          console.log("They are the time ",info.timeStart)
          localStorage.setItem('UserD',info.email)
          a=1;
          startBus(info.timeStart);
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

  function startBus(i){
    
  const d = new Date();
    d.getTime()
    const startI=(d.getTime()-i)/1000
    console.log(startI)
    console.log("The bus started at  ",i)
    rMachine.current.on('routeselected', (e) => {
      const coorPoints=e.route.coordinates;
      const allPoints = (coorPoints.reduce((a, obj) => a + Object.keys(obj).length, 0))/2;
  
      var moveBusOnMap = function() {
        let a=Math.round(startI)
        var i = a;
        while(i<allPoints){
          (function(i) {
            setTimeout(() => {
              setcurrentTrack(coorPoints[i]);
              console.log(coorPoints[allPoints-1],' and ',coorPoints[i])
              if(coorPoints[i]==coorPoints[allPoints-1]){
                setTimeout(() => {
                alert("Reached the destination 👍")
                window.location.reload()
                },1000)
              }
              console.log(speed)
            }, (20000/speed )* (i-a))
          })(i++)
  
        }
      };   
      moveBusOnMap();
  })}

  useEffect(() => {
    if (origin && destination && rMachine.current) {
      rMachine.current.setWaypoints([L.latLng(origin), L.latLng(destination)]);
      // rMachine.current.on('routeselected', (e) => {
      //   window.clearInterval();
      //   const coor = e.route.coordinates;
      //   alert('Route selected');
      //   setcurrentTrack(coor[cursor]);
      //   setInterval(() => {
      //     if (cursor === coor.length - 1) {
      //       setTimeout(() => {
      //         cursor = 0;
      //         setcurrentTrack(coor[cursor]);
      //       }, 5000);
      //     }
      //     cursor++;
      //     setcurrentTrack(coor[cursor]);
      //   }, 2000);
      // });
    }
  }, [origin, destination]);

  const handlestart=()=>{
       rMachine.current.on('routeselected', (e) => {
        window.clearInterval();
        const coor = e.route.coordinates;
        alert('Route selected');
        setcurrentTrack(coor[cursor]);
        setInterval(() => {
          if (cursor === coor.length - 1) {
            setTimeout(() => {
              cursor = 0;
              setcurrentTrack(coor[cursor]);
            }, 5000);
          }
          cursor++;
          setcurrentTrack(coor[cursor]);
        }, 2000);
      });
  }
  const handlestop=()=>{
    rMachine.current.off('routeselected', (e) => {
     window.clearInterval();
     const coor = e.route.coordinates;
     alert('Route selected');
     setcurrentTrack(coor[cursor]);
  //    setInterval(() => {
  //      if (cursor === coor.length + 1) {
  //        setTimeout(() => {
  //          cursor = 0;
  //          setcurrentTrack(coor[cursor]);
  //        }, 5000);
  //      }
  //      cursor--;
  //      setcurrentTrack(coor[cursor]);
  //    }, 2000);
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