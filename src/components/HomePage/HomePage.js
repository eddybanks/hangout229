import React from 'react'
import styles from '../../stylesheets/modules/HomePage.module.css'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const HomePage = (props) => {
  return (
    <div className={styles.homepageMainDiv}>
      <Row>
        <Col>
          <h1>{props.event.name}</h1>
          <p>{props.event.datetime}</p>
          <h3>Are you coming?</h3>
          <Link to='/rsvpConfirmation'>
            <Button>Yes</Button>
          </Link>
          <Button>No</Button>
        </Col>
      </Row>
    </div>
  )
}

export default HomePage 