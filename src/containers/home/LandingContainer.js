import React, { Component } from 'react'
import Landing from '../../components/home/Landing'
import { throws } from 'assert';

class LandingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {
        phone_number: '5055895577',
        pass_code: '',
        name: ''
      }
    }
    
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onLoginHandler = this.onLoginHandler.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onChangeHandler = (e) => {
    let currentUser = this.state.user
    currentUser.phone_number = e.target.value
    this.setState({
      user: currentUser
    })
  }

  onLoginHandler = () => {

  }

  onClickHandler = (e) => {
      
  }

  render() {
    return (
      <Landing 
        username={this.state.user.name} 
        onChange={this.onChangeHandler}
        phoneNumber={this.state.user.phone_number}
        onLogin={this.onLoginHandler} />
    )
  }
}

export default LandingContainer