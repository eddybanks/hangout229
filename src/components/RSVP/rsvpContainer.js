import React, { Component } from 'react'
import RSVPConfirmation from './rsvpConfirmation'
import NavigationBar from '../Layout/Navigation'

class RSVPContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            event: { name: 'Game Night', datetime: "SAT - 3/9/19 - 4PM" },
            user: { name: 'Carl', rsvp: false }
          }

    }

    render(){
        return(
            <div>
                <NavigationBar user={this.state.user} />
                <RSVPConfirmation />
            </div>
        )
    }
};

export default RSVPContainer;