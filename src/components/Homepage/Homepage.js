import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import './Stylesheet.scss'

const Homepage = props => (
  <Container fluid={true}>
    <div className="drop-shadow">
      <div className="glass"></div>
      <span className="main-title">PIGMENT</span>
      <span className="links">
        <Nav.Link className="acct-link" href="#sign-up">Sign Up</Nav.Link>
        <Nav.Link className="acct-link" href="#sign-in">Sign In</Nav.Link>
      </span>
    </div>
  </Container>
)

export default Homepage
