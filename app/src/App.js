import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CandyList from "./CandyList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candysList: []
    };
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
      <div className="App">
        <header>
          <CandyList list={this.state.candysList} />
        </header>
      </div>
    );
  }
}

export default App;
