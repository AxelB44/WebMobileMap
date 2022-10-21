import { MapContainer, TileLayer, Marker , Popup, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.css'
import * as React from 'react';

import MeMarkers from './Marker.json'

import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker() {
  const [position, setPosition] = useState(null)
  useMapEvents({
      click(e) {
          console.log(e.latlng);
          setPosition(e.latlng)
          let newMarker = {
            "numero" : 3,
            "name" : "Test",
            "latitude" : e.latlng.lat,
            "longitude" : e.latlng.lng,
            "date" : new Date().toDateString(),
          };
          MeMarkers.push(newMarker)
      },
    });

  return position === null ? null : (
      <Marker position={position}>
          <Popup>Vous habitez ici
            <Button>Ajouter Marker</Button>
          </Popup>
      </Marker>
  )
}

function Map() {

  let ListMarker = MeMarkers.map((MeMarker) =>
  <Marker position={[MeMarker.latitude, MeMarker.longitude]}>
    <Popup>
    Je suis a {MeMarker.name}
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Setting</Button>
      <Button>Mobility</Button>
      <Button>Graph</Button>
      <Button>Delete</Button>
    </ButtonGroup>
    </Popup>
  </Marker>
  );
  
    return (<div>
      <MapContainer center={[47.20, -1.53]} zoom={13} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {ListMarker}
        <LocationMarker/>
      </MapContainer>
      <Button>Go to list Marker</Button>
      <Button>Ajouter</Button>
      </div>
    );
  }
  
  export default Map;
  