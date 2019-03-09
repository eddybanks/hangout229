import React from 'react'
import {landingStyle, logoStyle} from '../../stylesheets/modules/landingStyle'
import logo from '../../images/logoPurple.png'

const landing = () => {
  return (
    <div style={landingStyle}>
      <header>
        <img src={logo} alt="Hangout229" style={logoStyle} />
      </header>
      <input type="text" />
    </div>
  )
}

export default landing