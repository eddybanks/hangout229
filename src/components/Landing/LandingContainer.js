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
          phoneNumber: "5052323412",
          nickname: "aycarl"
        }
      ],
      x: 0,
      y: 0,
      twilio_client: {},
      current_number: ''
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  componentDidMount = () => {
    const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID
    const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN
    // const client = require('twilio')(accountSid, authToken)
    // this.setState({
    //   twilio_client: client
    // })
    console.log(authToken)
  }

  lookupNumber = phone => {
    const client = this.state.twilio_client
    let number = ''
    client.lookups.phoneNumbers(phone).fetch({countryCode: 'US'}).then(phone_number => { number = phone_number.nationalFormat })
    this.setState({
      current_number: number
    })
  }

  handleMouseEnter = e => {
  }

  handleMouseOver = e => {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    })
  }

  handleMouseLeave= e => {
  }

  handleMouseLeave = e => {

  }

  render() {
    return (
      <Landing onMouseOver={this.handleMouseOver} x={this.state.x} y={this.state.y} customStyle={this.state.customStyle} />
    )
  }
}

export default LandingContainer