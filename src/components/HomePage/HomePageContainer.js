import React, { Component } from 'react'
import HomePage from './HomePage'
import NavigationBar from '../Layout/Navigation'
import {landingStyle, logoStyle, inputGroupStyle} from '../../stylesheets/modules/landingStyle'

class HomePageContainer extends Component {
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
        <NavigationBar user={this.state.user} />
        <HomePage event={this.state.event} />
      </div>
    )
  }
}

export default HomePageContainer