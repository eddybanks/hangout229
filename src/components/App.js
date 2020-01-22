import React, { Component } from 'react';
import LandingContainer from '../components/Landing/LandingContainer'
import HomePageContainer from './HomePage/HomePageContainer'
import RSVPContainer from './RSVP/rsvpContainer'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingContainer} />
            <Route exact path="/homepage" component={HomePageContainer} />
            <Route exact path="/rsvpConfirmation" component={RSVPContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
