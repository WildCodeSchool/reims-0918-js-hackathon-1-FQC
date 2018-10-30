import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}
        initialCenter={{
          lat: 49.256983,
          lng: 4.019755
        }}
        zoom={15}
        onClick={this.onMapClicked}>

        <Marker onClick={this.onMarkerClick}
          name={'Current location'}
          icon={{
            url: "./img/pumpkin.png",
            anchor: new this.props.google.maps.Point(16, 16),
            scaledSize: new this.props.google.maps.Size(32, 32)
          }} />

        <Marker
          name={'Gare de Reims'}
          position={{ lat: 49.258919, lng: 4.024525 }}
          icon={{
            url: "./img/pumpkin.png",
            anchor: new this.props.google.maps.Point(16, 16),
            scaledSize: new this.props.google.maps.Size(32, 32)
          }} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Reims</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM"
})(MapContainer)