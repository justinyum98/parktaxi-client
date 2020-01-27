import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAQHmh0KujbgcZaZDxAvapKSu6bub3Dzjs" }}
        defaultCenter={{
          lat: 32.88,
          lng: -117.23
        }}
        defaultZoom={12}
      ></GoogleMapReact>
    </div>
  );
}
