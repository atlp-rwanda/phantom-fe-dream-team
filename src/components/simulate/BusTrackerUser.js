import L from 'leaflet';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Popup } from 'react-leaflet';
import { LeafletTrackingMarker } from 'react-leaflet-tracking-marker';
import icon from '../../assets/busIcon.png';
import { connect, useDispatch, useSelector } from 'react-redux';

const busIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 30],
  popupAnchor: [2, -20]
});

function userBusTracker({ data }) {
  const UserEmail = localStorage.getItem('user')
  const { lat, lng } = data;
  const [prevPos, setPrevPos] = useState([lat, lng]);
  const seats = Number(localStorage.getItem('passangers'))
  useEffect(() => {
    if (prevPos[1] !== lng && prevPos[0] !== lat) setPrevPos([lat, lng]);
  }, [lat, lng, prevPos]);

  return (
    <LeafletTrackingMarker
      id="leaflet"
      icon={busIcon}
      position={[lat, lng]}
      previousPosition={prevPos}
      duration={1000}
    >
      <Popup>
        Bus: Coaster, RAC508E <br /> Remaining seats: {30 - seats} <br /> Driver:
        <Link to="/public-profile">{ UserEmail}</Link>
      </Popup>
    </LeafletTrackingMarker>
  );
}

export default userBusTracker;
