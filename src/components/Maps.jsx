import React from "react";
import Map, { Marker } from "react-map-gl";

const Maps = () => {
  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      }}
      mapboxAccessToken={import.meta.env.VITE_MAP}
      style={{ width: "100%", height: "65%" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker latitude={37.8} longitude={-122.4} />
    </Map>
  );
};

export default Maps;
