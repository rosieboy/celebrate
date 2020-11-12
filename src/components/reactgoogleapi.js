import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: 'auto',
  height: '250px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class MapComponent extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyA_3hHYuoffDd23cuKS14YTi1ACbVLeIXU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapComponent;
