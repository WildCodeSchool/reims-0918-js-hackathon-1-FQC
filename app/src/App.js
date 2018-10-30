import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"
import "./App.css";
import GoogleApiWrapper from "./GoogleApiWrapper";
import Inventaire from "./inventaire";

class App extends Component {
  render() {
    return (

      <div className="App">
        <Container fluid>
          <Row style={{ height: "100vh" }}>
            <Col xs="9" style={{ paddingLeft: "0" }}>
              <GoogleApiWrapper />
            </Col>
            <Col xs="3">
              <Inventaire />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
