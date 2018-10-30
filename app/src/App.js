import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CandyList from "./CandyList";
import { fetchCandys } from "./api/Candys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candysList: null
    };
  }
  componentDidMount() {
    fetchCandys()
      .then(response => {
        return this.setState({ candysList: response.data });
      })
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <CandyList list={this.state.candysList}/>
        </header>
      </div>
    );
  }
}

export default App;
