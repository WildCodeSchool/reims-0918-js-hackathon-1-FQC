import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Inventaire from "./inventaire";

const style = {
  width: "100%",
  height: "100%"
};


class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: "",
      longitude: ""
    }
    this.getLatitude = this.getLatitude.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.watchPosition(this.getLatitude)
  }

  getLatitude = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    console.log(position.coords.longitude)
  }





  render() {
    return (
      <div>
        <button onClick={() => navigator.geolocation.watchPosition(this.getLatitude)}>ACTUALISER</button>

        <Map
          google={this.props.google}
          style={style}
          center={{
            lat: this.state.latitude,
            lng: this.state.longitude
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}

            position={{ lat: this.state.latitude, lng: this.state.longitude }}
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
