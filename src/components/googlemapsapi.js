import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const mapStyles = {
  width: "auto",
  height: "16rem",
  "margin-left": "0rem",
  "margin-right": "2rem",
  color: "#319795",
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.long,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={this.props.marker}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
     </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA_3hHYuoffDd23cuKS14YTi1ACbVLeIXU",
})(MapContainer)
