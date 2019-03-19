import React, { Component } from 'react'
import Games from './Games'

class GamesContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      games: [
        { id: 0, name: 'Settlers of Catan', minNumOfPlayers: 3, maxNumOfPlayers: 4, estimatedMinutes: 60 },
        { id: 1, name: 'Monopoly', minNumOfPlayers: 3, maxNumOfPlayers: 4, estimatedMinutes: 60 }
      ]
    }
  }

  render () {
    return <Games />
  }
}

export default GamesContainer