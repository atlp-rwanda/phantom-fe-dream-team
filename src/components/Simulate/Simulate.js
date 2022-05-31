import React from 'react'
import './App.css'
import { MapContainer, TileLayer, Popup,Marker } from 'react-leaflet'
import Logout from '../Logout/logout'

export default function Simulate() {
  return (
    <>
    <Logout/>
    <MapContainer center={[-1.985070, 30.031855]} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-1.985070, 30.031855]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  </>
  )
}
