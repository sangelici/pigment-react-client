import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import Button from 'react-bootstrap/Button'
// import Nav from 'react-bootstrap/Nav'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import Favorites from '../favorites/Favorites.js'
import './ProfileStylesheet.scss'

const Profile = props => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          <Col md={10} className="user-about col-md-offset-1">
            <h2 className="text-uppercase">Profile</h2>
          </Col>
          <Col md={10} className="user-about col-md-offset-1">
            {/* List the user's artworks */}
          </Col>
        </Row>
        <div className="favorites-index">
          {/* this is where the favorites index will go so I will need to import Favorite here and format appropriately */}
        </div>
      </Container>
    </Fragment>
  )
}

export default Profile
