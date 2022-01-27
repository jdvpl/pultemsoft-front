import React, { useState,useCallback }from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import credentials from '../config/credentials';



const Map = ({latitud,longitud}) => {
  const lat=parseFloat(latitud)
  const lng=parseFloat(longitud)
  const containerStyle = {
    height: '50vh'
  };
  const center = {
    lat: +lat,
    lng: +lng
  };
  const { isLoaded } = useJsApiLoader({
    id: 'jdvpl',
    googleMapsApiKey: credentials.mapsKey,
    latitud,
    longitud
  })
  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{lat:lat,lng:lng}}></Marker>
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map;





