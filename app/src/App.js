import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./GoogleApiWrapper"
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
        <GoogleApiWrapper />
      </div>
    );
  }
}

export default App;
