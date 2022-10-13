import React, { useState } from 'react'
import Header from './components/Header.js'
import 'mapbox-gl/dist/mapbox-gl.css';
import Maps from './components/Maps.js'
import axios from 'axios';

export interface IP {
  ip: string;
  location: Location;
  as: As;
  isp: string;
}
export interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}
export interface As {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}


const  App = () => {
  const [data, setData] = useState<IP | null>(null)

  const handleFetch = async(data:string):Promise<void> => { 
    console.log(data)
    try {
      const res= await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IP}&ipAddress=${data}`)
      setData(res.data)
      
    } catch (error) {
      console.log(error)
    }
   }
  return <>
  <Header handleFetch={(val:string) => handleFetch(val)} data={data}/>
  <Maps data={data} />
  </>
}

export default App
