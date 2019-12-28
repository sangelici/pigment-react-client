import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './HeaderStylesheet.scss'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#artworks">Gallery</Nav.Link>
    {/* <Nav.Link href="#profile">Profile</Nav.Link> */}
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

// const alwaysOptions = (
//   <Fragment>
//   </Fragment>
// )

const Header = ({ user }) => {
  // if (window.location.pathname === '/sign-in') return null
  return (
    <Navbar variant="dark" expand="md">
      <Navbar.Brand className="ml-3"style={{ fontWeight: 'bolder', fontSize: '2rem', letterSpacing: '.5rem' }} href="#/artworks">
        PGMT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {user && <span className="navbar-text mr-5">
          Welcome, {user.email} </span> }
          {/* console.log(user) */}
          {/* {alwaysOptions} */}
          { user ? authenticatedOptions : unauthenticatedOptions }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
