import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./map.css";

export default function Map({ title, location }) {
  return (
    <div className="map-section">
      <div className="address-container">
        <h2 >Karte der Location</h2>
      </div>
      <MapContainer center={location} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}></Marker>
      </MapContainer>
    </div>
  );
}
