import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import "./BackgroundAnimate.css";
import GoogleApiWrapper from "./GoogleApiWrapper";
import Inventaire from "./inventaire";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candysList: [],
      currentPage: false
    };
    this.handleDisplayMap = this.handleDisplayMap.bind(this);
  }
  handleDisplayMap() {
    this.setState({ currentPage: true });
  }

  componentDidMount() {
    fetch(`https://fr-en.openfoodfacts.org/category/bonbons.json`)
      .then(results => results.json())
      .then(data => {
        this.setState({
          candysList: data.products
        });
      });
  }

  render() {
    return (
      <body>
        {!this.state.currentPage && (
          <div>
            <div className="spider_0">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>
            <div className="spider_1">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>
            <div className="spider_2">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>
            <div className="spider_3">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>
            <div className="spider_4">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>
            <div className="spider_5">
              <div className="eye left" />
              <div className="eye right" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg left" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
              <span className="leg right" />
            </div>

            <img
              className="web-right"
              src="http://www.scandiafun.com/images/spiderweb-corner-right.png"
            />
            <img
              className="web-left"
              src="http://www.scandiafun.com/images/spiderweb-corner-right.png"
            />

            <a onClick={() => this.handleDisplayMap(this.state.currentPage)}>
              <h1>
                WILD CANDY HUNT
                <br />
                <p>Que la chasse commence !</p>
              </h1>
            </a>
          </div>
        )}
        {this.state.currentPage && (
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
        )}
      </body>
    );
  }
}

export default App;
