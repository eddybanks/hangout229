import React, { Component } from 'react'
import logo from '../../images/logoPurple.png'
import Welcome from './Welcome'
import {landingStyle, logoStyle, inputGroupStyle} from '../../stylesheets/modules/landingStyle'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      datetime: "SAT - 3/9/19 - 4PM",
      rsvp: false
    }
  }

  render() {
    return (
      <div>
        <Welcome user="Carl" logo={logo} />
      </div>
    )
  }
}

export default WelcomeContainer