import React, { Component } from 'react'
import logo from '../../assets/logoPurple.png'
import Welcome from './Welcome'
import {landingStyle, logoStyle, inputGroupStyle} from '../../stylesheets/modules/landingStyle'

class WelcomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      event: { name: 'Game Night', datetime: "SAT - 3/9/19 - 4PM" },
      user: { name: 'Carl', rsvp: false }
    }
  }

  render() {
    return (
      <div>
        <Welcome user={this.state.user} event={this.state.event} logo={logo} />
      </div>
    )
  }
}

export default WelcomeContainer