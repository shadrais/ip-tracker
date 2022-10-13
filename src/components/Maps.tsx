import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import {IP} from '../App'

interface Props  {
  data: IP | null
}

const Maps = ({data}:Props):React.ReactElement => {

  if(data) {
    const {lat, lng} = data.location
    return (
    <Map
    initialViewState={{
      longitude:   lng,
      latitude:  lat,
      zoom: 10,
    }}
    mapboxAccessToken={import.meta.env.VITE_MAP}
    style={{ width: "100%", height: "65%", position:'fixed',top:'35%' }}
    mapStyle="mapbox://styles/mapbox/streets-v11"
    >
    {/* // <Popup latitude={lat} longitude={lng} /> */}
    <Marker latitude={lat} longitude={lng} />
    </Map>
    )
  }
  return <></>
};

export default Maps;
