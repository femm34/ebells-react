import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "400px",
  height: "200px",
};

// 20.65061235554603, -98.57506462008065
const center = { lat: 20.65061235554603, lng: -98.57506462008065 };

export default function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB4TDHG0MEU3eYHnBuAhfK6-OKyj_XCjk4",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={20}
        center={center}
      >
        <Marker
          position={{ lat: 20.65061235554603, lng: -98.57506462008065 }}
          icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
        />
      </GoogleMap>
    </div>
  );
}
