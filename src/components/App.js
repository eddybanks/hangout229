import React, { Component } from 'react';
import LandingContainer from '../components/Landing/LandingContainer'
import WelcomeContainer from '../components/Welcome/WelcomeContainer'
import { Route, Switch } from 'react-router-dom'
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/welcome" component={WelcomeContainer} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
