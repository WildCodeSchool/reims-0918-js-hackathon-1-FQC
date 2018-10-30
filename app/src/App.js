import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import GoogleApiWrapper from "./GoogleApiWrapper";
import Inventaire from "./inventaire";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs="4">
              <Inventaire />
            </Col>
            <Col xs="8">
              <GoogleApiWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
