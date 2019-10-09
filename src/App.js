import React, { Component } from 'react';
import './App.css';
import DogList from "./components/DogList.js";
import _ from "lodash";

class App extends Component {
  
  state = {
    dogs: [],
  }

  componentDidMount() {
    fetch("./data/dogs.json")
      .then(response => response .json())
      .then(response => {
        this.setState({ dogs: response.dogs })
      })
  }

  render(){

    const lodashPractice = _.tail(["you'll never see this", "who did this?", "why am I here!"])

    return (
      <div className="App">
        <header>
          <h1>BarkWire</h1>
          <p>A dating app for dogs</p>
          <p>{lodashPractice.join(" ")}</p>
        </header>
        <main>
          <DogList dogs={this.state.dogs}/>
        </main>
      </div>
    );
  }
}

export default App;
