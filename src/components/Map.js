import React from "react";
import GoogleMapReact from "google-map-react";
import Pin from "./Pin";

export default function Map() {
  const lotsData = [
    {
      id: "Pangea",
      location: {
        lat: 32.8842556,
        lng: -117.2431062
      }
    },
    {
      id: "Gilman",
      location: {
        lat: 32.8773774,
        lng: -117.2338526
      }
    }
  ];
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAQHmh0KujbgcZaZDxAvapKSu6bub3Dzjs" }}
      defaultCenter={{
        lat: 32.88,
        lng: -117.23
      }}
      defaultZoom={12}
    >
      {lotsData.map(lot => (
        <Pin
          key={lot.id}
          id={lot.id}
          lat={lot.location.lat}
          lng={lot.location.lng}
        ></Pin>
      ))}
    </GoogleMapReact>
  );
}
