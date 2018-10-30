import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Inventaire from "./inventaire";
import "./GoogleApiWrapper.css";

const style = {
  width: "100%",
  height: "100%"
};


class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: "",
      longitude: "",
      MapLatitude: "",
      MapLongitude: ""
    }
    this.getLatitude = this.getLatitude.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.watchPosition(this.getLatitude)

  }


  getLatitude = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      MapLatitude: this.state.latitude,
      MapLongitude: this.state.longitude,
      longitude: position.coords.longitude
    })
  }

  onMarkerClick = (props, marker, e) => {
    console.log(props.map.center)
    this.setState({
      MapLatitude: props.map.center.lat(),
      MapLongitude: props.map.center.lng(),
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }





  render() {
    return (
      <div>

        <Map
          google={this.props.google}
          style={style}
          center={{
            lat: this.state.MapLatitude,
            lng: this.state.MapLongitude
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker
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
            adresse={"Place de la gare"}
            onClick={this.onMarkerClick}
            mapCenter={{
              lat: this.state.latitude,
              lng: this.state.longitude
            }}
            position={{ lat: 49.258919, lng: 4.024525 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Cathédrale Notre-Dame de Reims"}
            adresse={"Place du Cardinal Luçon"}
            onClick={this.onMarkerClick}
            position={{ lat: 49.253878, lng: 4.034093 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Hôtel de ville"}
            adresse={"9 Place de l'Hôtel de ville"}
            onClick={this.onMarkerClick}
            position={{ lat: 49.258175, lng: 4.032134 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Place Royale"}
            adresse={"5 Place Royale"}
            onClick={this.onMarkerClick}
            position={{ lat: 49.255585, lng: 4.034319 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <Marker
            name={"Fontaine Subé"}
            adresse={"Place Drouet d'Erlon"}
            onClick={this.onMarkerClick}
            position={{ lat: 49.255147, lng: 4.027244 }}
            icon={{
              url: "./img/candy.png",
              anchor: new this.props.google.maps.Point(10, 10),
              scaledSize: new this.props.google.maps.Size(60, 60)
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <p className="m-0">{this.state.selectedPlace.adresse}</p>
            </div>
          </InfoWindow>
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
