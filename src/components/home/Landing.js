import React from 'react'
import {landingStyle, logoStyle, inputGroupStyle} from '../../stylesheets/modules/landingStyle'
import logo from '../../images/logoPurple.png'
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'

const landing = (props) => {
  return (
    <div style={landingStyle}>
      <header>
        <img src={logo} alt="Hangout229" style={logoStyle} />
      </header>
      <InputGroup style={inputGroupStyle}>
        <Input type="text" onChange={props.onChange} placeholder="Your Phone Number Goes Here!" />
        <InputGroupAddon addonType="append"><Button onClick={props.onClick}>Login</Button></InputGroupAddon>
      </InputGroup>
      
    </div>
  )
}

export default landing