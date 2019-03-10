import React, { Component } from 'react';
import LandingContainer from '../containers/home/LandingContainer'
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingContainer />
      </div>
    );
  }
}

export default App;
