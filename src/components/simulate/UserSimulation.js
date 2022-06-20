import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import BusTracker from './BusTracker';
import RoutingMachine from './RoutingMachine';
import Logout from '../Logout/logout';

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

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);

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

  const [currentTrack, setcurrentTrack] = useState(null);

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
    <Logout/>
    <section className="max-w-full md:w-5/6 mx-auto">

<div className="flex flex-col items-center m-10 space-y-4 text-center">
  <h1 className="text-3xl font-bold text-blue-700">Navigation Map</h1>

</div>

<div className="relative overflow-hidden rounded-lg grid-cols-3 grid-rows-1 shadow-2xl  lg:pb-0 grid gap-1.5 md:grid-cols-3 h-auto shadow-b w-[98%] sm:grid-cols-1">
<div className=" p-6 bg-gray-100 rounded ml-4">
<div className="flex justify-center">
      <form
        id="form"
        onSubmit={handleRoute}
      >
        <div className="w-80">
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">
          Source
        </label>
          <select
            type="text"
            id="origin"
            name="origin"
            ref={selectOne}
            onChange={handleChange}
            placeholder="your current location"
            className="w-full rounded-md px-9 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
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
        <div className="flex justify-center">
      <div className="w-80">
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
          Destination
        </label>
          <select
            onChange={handleChangeDes}
            type="text"
            id="destination"
            name="destination"
            placeholder="your destination"
            className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
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
          </div>
          </div>
          <div className="flex justify-center space-x-3 m-3">
          <button
                type="submit"
                className="inline-flex items-center px-6 py-2 text-white bg-blue-700 border border-blue-700 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              >
                <Icon icon="ic:outline-track-changes" />
              </button>
              </div>
              <div className="flex justify-center gap-4">
    </div>
        </div>
      </form>

     
    </div>
    </div>
    <div className="ml-auto text-center h-[450px]">
        <MapContainer
          center={{ lat: -1.936671, lng: 30.053524 }}
          zoom={13}
          zoomControl={false}
          className="h-screen md:h-[88vh] w-[95vw]"
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
    </section>
    </>
  );
};

export default UserSimulation;