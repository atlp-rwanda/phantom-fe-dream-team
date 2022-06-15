import L from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import BusTracker from './BusTracker';
import RoutingMachine from './RoutingMachine';
import Button from './Buttons';
import Logout from '../Logout/logout';

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

  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const rMachine = useRef();
  const selectOne = useRef();
  const selectDes = useRef();
  const [position, setposition] = useState(null);
  const [start, seStart] = useState(false);  
  const [passengers, setPassengers] = useState(0);
  const [speed, setSpeed] = useState(1000);
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

  const handlestart = () => {
    rMachine.current.on('routeselected', (e) => {
      window.clearInterval();
      const coor = e.route.coordinates;
      seStart(true);
      alert('Car Started');
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
  const handlestop = () => {
    rMachine.current.off('routeselected', (e) => {
      window.clearInterval();
      const coor = e.route.coordinates;
      seStart(false);
      alert('Car Stopped');
      setcurrentTrack(coor[cursor]);
        //  setInterval(() => {
        //    if (cursor === coor.length + 1) {
        //      setTimeout(() => {
        //        cursor = 0;
        //        setcurrentTrack(coor[cursor]);
        //      }, 5000);
        //    }
        //    cursor--;
        //    setcurrentTrack(coor[cursor]);
        //  }, 2000);
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

  const addPassenger = () => {
    if(start==false){
      setPassengers((prev) => prev + 1);
      alert("Added one Passenger");
    }
    else{
      alert("The bus is moving");
    }
   
  };

  const removePassenger = () => {
    if (passengers !== 0 && start==false){
      setPassengers((prev) => prev - 1);
      alert("Removed one Passenger");
    }
    else if(start==true)
    {
      alert("The bus is moving");
    }
    else {
      alert("No Passengers To Remove");
    }
  };


  const handleAccelerate = () => {
    alert("Speeding up the Bus.");
    setSpeed((prev) => prev - 100);
  };
  const handleDecelerate = () => {
    alert("Speeding down the Bus.");
    setSpeed((prev) => prev + 100);
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


        <form
          id="form"
          onSubmit={handleRoute}
          className="fixed z-20 flex flex-col justify-center "
        >
          <div className="flex flex-col bg-background p-4 rounded-xl mt-2 ml-6 md:ml-10 md:items-baseline">
            <select
              type="text"
              id="origin"
              name="origin"
              ref={selectOne}
              onChange={handleChange}
              placeholder="your current location"
              className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1  w-40 md:w-56 border-2"
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
              className="rounded-xl bg-background border-primary text-sm outline-none mb-2 pl-4 md:pl-8 py-1 w-40 md:w-56 border-2"
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
            <div type="submit" className="flex justify-center md:ml-16">
              <Button
                name="Track"
                styles="bg-primary text-sm text-background py-1"
              />

            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handlestart}
                data-tip="Move Bus"
                className="bg-green-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >Start
              </button>
              <button
                onClick={handlestop}
                data-tip="Stop Bus"
                className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >Stop
              </button>
            </div>



            <div className="flex justify-center gap-4">
              <button
                onClick={handleAccelerate}
                className="bg-green-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >Accelerate
              </button>
              <button
                onClick={handleDecelerate}
                className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >Decelerate
              </button>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={addPassenger}
                className="bg-green-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >addPassenger
              </button>
              <button
                onClick={removePassenger}
                className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
              >Remove Passenger
              </button>
            </div>
            
          </div>
          <div className=" flex justify-center gap-4">
              <span>PASSENGERS</span>
            </div>
            <div className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4" >
              <span>{passengers}</span>
            </div>
        </form>

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