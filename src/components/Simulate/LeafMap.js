import React, {useState}from "react";
import { Map, Marker, TileLayer,Popup} from "react-leaflet";
import { Icon } from "leaflet";
import parkData from "./buspark.json"
import bustopData from "./busstop.json";
import "./App.css";

export const busparkingicon = new Icon({
  iconUrl: "/bus-parking.svg",
  iconSize: [48, 48]
});

export const busstopicon = new Icon({
  iconUrl: "/busstop.svg",
  iconSize: [48, 48]
});

 function LeafMap  () {
  const [activePark, setActivePark] = useState(null);
  console.log(activePark);
  return (
    <Map center={[-1.9,30.031855]} zoom={12}>
   <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={busparkingicon}
        />
      ))}
       {bustopData.features.map(busstop => (
        <Marker
          key={busstop.properties.PARK_ID}
          position={[
            busstop.geometry.coordinates[1],
            busstop.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(busstop);
          }}
          icon={busstopicon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}

    </Map>
  );
}
export default LeafMap;