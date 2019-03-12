import React, { Component } from 'react'
import Landing from './Landing'

class LandingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          id: "asdasd1",
          phoneNumber: "5055895577",
          nickname: "edka"
        },
        {
          id: "qwdqwd1",
          phoneNumber: "50523234123",
          nickname: "aycarl"
        }
      ]
    }
  }

  render() {
    return (
      <Landing />
    )
  }
}

export default LandingContainer