import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Inventaire from "./inventaire";

const style = {
  width: "100%",
  height: "100%"
};

function maPosition(position) {
  var infopos = "Position déterminée :\n";
  infopos += "Latitude : " + position.coords.latitude + "\n";
  infopos += "Longitude: " + position.coords.longitude + "\n";
  infopos += "Altitude : " + position.coords.altitude + "\n";
  console.log(infopos)
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(maPosition);
}

export class MapContainer extends Component {
  render() {
    return (
      <div>
        <div id="infoposition"></div>
        <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 49.256983,
            lng: 4.019755
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            icon={{
              url: "./img/pumpkin.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Gare de Reims"}
            position={{ lat: 49.258919, lng: 4.024525 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Cathédrale Notre-Dame de Reims"}
            position={{ lat: 49.253878, lng: 4.034093 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Hôtel de ville"}
            position={{ lat: 49.258175, lng: 4.032134 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Place Royale"}
            position={{ lat: 49.255585, lng: 4.034319 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Fontaine Subé"}
            position={{ lat: 49.255147, lng: 4.027244 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Reims</h1>
            </div>
          </InfoWindow>
        </Map>
        <Inventaire />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM"
})(MapContainer);
