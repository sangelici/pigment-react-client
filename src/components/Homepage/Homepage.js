import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import './Stylesheet.scss'

const Homepage = props => (
  <Fragment>
    <Container className="drop-shadow" fluid={true}>
      <div className="glass"></div>
      <span className="main-title">PIGMENT</span>
      <Row className="links">
        <Nav.Link href="#sign-up">Sign Up</Nav.Link>
        <Nav.Link href="#sign-in">Sign In</Nav.Link>
      </Row>
    </Container>
  </Fragment>
)

export default Homepage
