import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./GoogleApiWrapper.css";
import { Col, Row } from "reactstrap";
import Inventaire from "./inventaire";
import ModalCandy from "./ModalCandy";

const style = {
  width: "100%",
  height: "100%"
};

const candyToList = candy => {
  return {
    image: candy.image_url,
    name: candy.product_name
  };
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      latitude: "",
      longitude: "",
      MapLatitude: "",
      MapLongitude: "",
      candysList: [],
      Inventory: [],
      modal: false,
      selectedCandy: {}
    };
    this.getLatitude = this.getLatitude.bind(this);
    // this.addToInventory = this.addToInventory.bind(this);
    this.handleCandyToModal = this.handleCandyToModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetch(`https://fr-en.openfoodfacts.org/category/candies.json`)
      .then(results => results.json())
      .then(data => {
        for (let i = 0; i < data.products.length; i++) {
          this.setState({
            candysList: [
              ...this.state.candysList,
              candyToList(data.products[i])
            ]
          });
        }
      });
    navigator.geolocation.watchPosition(this.getLatitude);
  }

  getLatitude = position => {
    this.setState({
      latitude: position.coords.latitude,
      MapLatitude: this.state.latitude,
      MapLongitude: this.state.longitude,
      longitude: position.coords.longitude
    });
  };

  onMarkerClick = (props, marker, target) => {
    this.setState({
      MapLatitude: props.map.center.lat(),
      MapLongitude: props.map.center.lng(),
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      Inventory: [...this.state.Inventory, this.state.candysList[0]]
    });
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // addToInventory = (target) => {
  // this.setState({
  //   inventory: { ...this.state.inventory, target }
  // })
  //   console.log("hello")
  // }
  

  closeModal () {
    this.setState({
      modal: false
    })
  }

  handleCandyToModal(candyInfos) {
    this.setState({
      selectedCandy: candyInfos,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Row style={{ height: "100vh" }}>
        <Col xs="9" style={{ paddingLeft: "0" }}>
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
              key="me"
              name={"Current location"}
              position={{ lat: this.state.latitude, lng: this.state.longitude }}
              icon={{
                url: "./img/pumpkin.png",
                anchor: new this.props.google.maps.Point(10, 10),
                scaledSize: new this.props.google.maps.Size(60, 60)
              }}
            />
            <Marker
              key="0"
              name={"Gare de Reims"}
              adresse={"Place de la gare"}
              bonbon={
                this.state.candysList[0] ? this.state.candysList[0].image : ""
              }
              onClick={this.onMarkerClick}
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
              key="1"
              name={"Cathédrale Notre-Dame de Reims"}
              adresse={"Place du Cardinal Luçon"}
              bonbon={
                this.state.candysList[1] ? this.state.candysList[1].image : ""
              }
              onClick={this.onMarkerClick}
              onClick={this.onMarkerClick}
              position={{ lat: 49.253878, lng: 4.034093 }}
              icon={{
                url: "./img/candy.png",
                anchor: new this.props.google.maps.Point(10, 10),
                scaledSize: new this.props.google.maps.Size(60, 60)
              }}
            />
            <Marker
              key="2"
              name={"Hôtel de ville"}
              adresse={"9 Place de l'Hôtel de ville"}
              bonbon={
                this.state.candysList[2] ? this.state.candysList[2].image : ""
              }
              onClick={this.onMarkerClick}
              onClick={this.onMarkerClick}
              position={{ lat: 49.258175, lng: 4.032134 }}
              icon={{
                url: "./img/candy.png",
                anchor: new this.props.google.maps.Point(10, 10),
                scaledSize: new this.props.google.maps.Size(60, 60)
              }}
            />
            <Marker
              key="3"
              name={"Place Royale"}
              adresse={"5 Place Royale"}
              bonbon={
                this.state.candysList[3] ? this.state.candysList[3].image : ""
              }
              onClick={this.onMarkerClick}
              position={{ lat: 49.255585, lng: 4.034319 }}
              icon={{
                url: "./img/candy.png",
                anchor: new this.props.google.maps.Point(10, 10),
                scaledSize: new this.props.google.maps.Size(60, 60)
              }}
            />
            <Marker
              key="4"
              name={"Fontaine Subé"}
              adresse={"Place Drouet d'Erlon"}
              bonbon={
                this.state.candysList[4] ? this.state.candysList[4].image : ""
              }
              onClick={this.onMarkerClick}
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
                <p style={{ fontSize: "1rem" }} className="m-0">
                  {this.state.selectedPlace.adresse}
                </p>

                <button onClick={() => this.addToInventory}>
                  <img src={this.state.selectedPlace.bonbon} />
                </button>
              </div>
            </InfoWindow>
            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Reims</h1>
              </div>
            </InfoWindow>
          </Map>
        </Col>
        ￼￼￼￼￼￼
        <Col xs="3">
          <Inventaire candys={this.state.Inventory} candyToModal={this.handleCandyToModal} />
        </Col>
        <ModalCandy selectedCandy={this.state.selectedCandy} modal={this.state.modal} closeModal={this.closeModal} />
      </Row>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCeDmh4OYEnE1NDKhAu1u66yDln-AQXEyM"
})(MapContainer);
