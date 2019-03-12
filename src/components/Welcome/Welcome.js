import React from 'react'
import { logoStyle } from '../../stylesheets/modules/landingStyle'
import { Row, Col } from 'reactstrap'

const Welcome = (props) => {
  return (
    <div>
      <Row>
        <h3>Welcome, {props.user}!</h3>
        {/* <img src={props.logo} alt="images" style={{width: '20vh', height: '5vh', textAlign: 'right'}} /> */}
      </Row>
      <Row>
        <h2>HEHE</h2>
      </Row>
    </div>
  )
}

export default Welcome 