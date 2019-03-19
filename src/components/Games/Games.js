import react, { Fragment } from 'react'
import { Card, CardBody } from 'reactstrap'

const games = props => {
  return (
    <Fragment>
      { props.games.map(
        <Card>
          <CardBody>

          </CardBody>
        </Card>
      )}
    </Fragment>
  )
}

export default games