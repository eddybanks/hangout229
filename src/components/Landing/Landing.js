import React from 'react'
//import { inputGroupStyle} from '../../stylesheets/modules/landingStyle'
import logo from '../../images/h229_img@300x-100.jpg'
import { InputGroup, Input, InputGroupAddon, Button, InputGroupText, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import styles from '../../stylesheets/modules/Landing.module.css'

const landing = (props) => {
  return (
    <div className={styles.landingContainer}>
        <div className={styles.logoContainter}>
          <img src={logo} alt="Hangout229" className={styles.logoStyle} />
        </div>
        <br/>
        <div className={styles.landingLogin}>
          <InputGroup className={styles.inputGroupWithLabel}>
            <InputGroupAddon addonType="append">
              <InputGroupText>Phone # log in:</InputGroupText>
            </InputGroupAddon>
            <Input id="loginNumber" type="text" placeholder="e.g. 5052455678"/>
          </InputGroup>
          <br/>
          <Link to="/homepage">
            <Button color="secondary" size="lg" block>
              Login
            </Button>
          </Link>
        </div>
    </div>
  )
}

export default landing