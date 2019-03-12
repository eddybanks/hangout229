import React from 'react'
import {landingStyle, logoStyle, inputGroupStyle} from '../../stylesheets/modules/landingStyle'
import logo from '../../images/logoPurple.png'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const landing = (props) => {
  return (
    <div style={landingStyle}>
      <header>
        <img src={logo} alt="Hangout229" style={logoStyle} />
      </header>
      <InputGroup style={inputGroupStyle}>
        <Input type="text" placeholder="Your Phone Number Goes Here!" />
        <InputGroupAddon addonType="append">
          <Button color="danger">
            <Link to="/welcome">Login</Link>
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <p>{props.message}</p>
    </div>
  )
}

export default landing