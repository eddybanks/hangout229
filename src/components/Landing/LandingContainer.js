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
      ],
      x: 0,
      y: 0,
      customStyle: {}
    }

    this.handleMouseOver = this.handleMouseOver.bind(this)
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