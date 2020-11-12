import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  height: '250px'
};



function MapComponent({ longitude, latitude, marker }) {
    const center = {
        lat: latitude,
        lng: longitude
      };
      const onLoad = marker => {
        console.log('marker: ', marker) 
      };   
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA_3hHYuoffDd23cuKS14YTi1ACbVLeIXU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
            onLoad={onLoad}
            position={center}
            label={marker}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComponent)
