import React from 'react'
import styles from '../../stylesheets/modules/HomePage.module.css'
import { Row, Col, Button } from 'reactstrap'

const HomePage = (props) => {
  return (
    <div className={styles.homepageMainDiv}>
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

export default HomePage 