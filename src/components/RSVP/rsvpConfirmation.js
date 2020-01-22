import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const RSVPConfirmation = (props) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3>Awesome! See you at game night!</h3>
                        <p>Don't forget:</p>
                        <p>Sat - 4 PM</p>
                        <p>@ 229 Sycamore St NE</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RSVPConfirmation;