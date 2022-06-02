import React,{useState,useRef} from 'react'
// import './App.css'
import Logout from '../Logout/logout'
// import LeafMap from './LeafMap'
export default function Simulate() {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [Start, setStart] = useState(false);

  const originRef = useRef()
  const destinationRef = useRef();

  const calculateRoute = () => {
    /* if there is no input */
    if (originRef.current.value === 'Choose Source' || destinationRef.current.value === 'Choose Destination') {
      return notifyInfo('You have to select Source and Destination');
    }

    else if (originRef.current.value === destinationRef.current.value) {
      return notifyInfo('You have to select different Source and Destination');
    }

    else {
      //notifySuccess('We are tracing you route');
      setSource(originRef.current.value)
      setDestination(destinationRef.current.value)
    }

  }

  return (
    <>
   <Logout/>
   <section className="max-w-full md:w-5/6 mx-auto">

<div className="flex flex-col items-center m-10 space-y-4 text-center">
  <h1 className="text-3xl font-bold text-blue-700">Navigation Map</h1>

</div>

<div className="relative overflow-hidden rounded-lg grid-cols-3 grid-rows-1 shadow-2xl  lg:pb-0 grid gap-1.5 md:grid-cols-3 h-auto shadow-b w-[98%] sm:grid-cols-1">
  {/* Control section */}
  <div className=" p-6 bg-gray-100 rounded ml-4">
    <div className="flex flex-col justify-end m-2 lg:m-6">

    </div>

    <div className="flex justify-center">

      <div className="w-80">
        <label htmlFor="source" className="block text-sm font-medium text-gray-700">
          Source
        </label>
        <select
          name="source"
          id="source"
          className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
          ref={originRef}
        >
          <option defaultValue="" selected disabled>Choose Source</option>
          <option value="Downtown Bus park">Downtown Bus park</option>
          <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
          <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
          <option value="Remera Bus park">Remera Bus park</option>
        </select>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="w-80">
        <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
          Destination
        </label>
        <select
          name="destination"
          id="destination"
          className="w-full rounded-md px-4 py-2 mt-1 text-sm outline-none border-2 border-gray-200 focus:border-indigo-500"
          ref={destinationRef}
        >
          <option defaultValue="" selected disabled>Choose Destination</option>
          <option value="Downtown Bus park">Downtown Bus park</option>
          <option value="Nyabugogo Bus park">Nyabugogo Bus park</option>
          <option value="Kacyiru Bus Park">Kacyiru Bus Park</option>
          <option value="Remera Bus park">Remera Bus park</option>
        </select>
      </div>
    </div>


    <div className="flex justify-center space-x-3 m-3">

      <button
        className="inline-flex items-center px-6 py-2 text-white bg-blue-700 border border-blue-700 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
         onClick={calculateRoute}>

          Check Route
 
      </button>
    </div>

    <div className="flex justify-center gap-4">
      <button
        data-tip="Move Bus"
        className="bg-green-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
        onClick={() => setStart(true)}
      >Start
      </button>
      <button
        data-tip="Stop Bus"
        className="bg-red-600 text-white w-10 h-10 rounded-full flex justify-center items-center p-4"
        onClick={() => setStart(false)}
        >Stop
      </button>
    </div>
  </div>


  {/* Map section */}

  <div className="ml-auto text-center h-[450px]">
    {/* <LeafMap
     source={source} 
     destination={destination}
     Start={Start} 
    /> */}
  </div>
</div>

</section >
  </>
  )
}
