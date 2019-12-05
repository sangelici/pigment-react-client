import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import './Stylesheet.scss'

const Homepage = props => (
  <Fragment>
    <div className="drop-shadow">
      <div className="glass"></div>
      <span className="main-title">PIGMENT</span>
      <span className="links">
        <Nav.Link href="#sign-up">Sign Up</Nav.Link>
        <Nav.Link href="#sign-in">Sign In</Nav.Link>
      </span>
    </div>
  </Fragment>
)

export default Homepage
