import React from 'react'
import styles from '../../stylesheets/modules/Welcome.module.css'
import { Row, Col, Button } from 'reactstrap'

const Welcome = (props) => {
  return (
    <div className={styles.WelcomePage}>
      <Row>
        <Col>
          <h3>Welcome, {props.user.name}!</h3>
        </Col>
        <Col>
          <img src={props.logo} alt="images" className={styles.LogoNav} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{props.event.name}</h1>
          <p>{props.event.datetime}</p>
          <h3>Are you coming?</h3>
          <Button>Yes</Button>
          <Button>No</Button>
        </Col>
      </Row>
    </div>
  )
}

export default Welcome 