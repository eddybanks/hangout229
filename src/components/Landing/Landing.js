import React from 'react'
import { inputGroupStyle} from '../../stylesheets/modules/landingStyle'
import logo from '../../assets/logoPurple.png'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import styles from '../../stylesheets/modules/Landing.module.css'

const landing = (props) => {
  return (
    <div className={styles.landingStyle}>
      <div onMouseOver={props.onMouseOver} className={styles.mouseArea}>
        <header>
          <img src={logo} alt="Hangout229" className={styles.logoStyle} />
        </header>
        <InputGroup style={inputGroupStyle}>
          <Input type="text" placeholder="Your Phone Number Goes Here!" />
          <InputGroupAddon addonType="append">
            <Button color="danger">
              <Link to="#">Login</Link>
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}

export default landing