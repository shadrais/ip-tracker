import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import {IP} from '../App'

interface Props  {
  data: IP
}

const Maps = ({data}:Props) => {

  if(data) {
    const {lat, lng} = data.location
    return (
    <Map
    initialViewState={{
      longitude:   lng,
      latitude:  lat,
      zoom: 14,
    }}
    mapboxAccessToken={import.meta.env.VITE_MAP}
    style={{ width: "100%", height: "65%" }}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    >
    {/* // <Popup latitude={lat} longitude={lng} /> */}
    <Marker latitude={lat} longitude={lng} />
    </Map>

    )
  }
};

export default Maps;
