import React, { Component } from "react";
import "./App.css";
import GoogleApiWrapper from "./GoogleApiWrapper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default App;
