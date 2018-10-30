import React, { Component } from "react";
import "./App.css";
import "./BackgroundAnimate.css";
import GoogleApiWrapper from "./GoogleApiWrapper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: false
    };
    this.handleDisplayMap = this.handleDisplayMap.bind(this);
  }
  handleDisplayMap() {
    this.setState({ currentPage: true });
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

            <a
              className="toto"
              onClick={() => this.handleDisplayMap(this.state.currentPage)}
            >
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
            <GoogleApiWrapper />
          </div>
        )}
      </body>
    );
  }
}

export default App;
