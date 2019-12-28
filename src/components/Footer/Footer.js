import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

import './FooterStylesheet.scss'

const Footer = props => (
  <MDBFooter color="blue" className="font-small p-3 col-md-offset-3">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow className="footer-row">
        <MDBCol className="footer-content" md="3">
          <h5 className="title">PIGMENT </h5>
          <p>
            Pigment is a home for any creator. It&#39;s a marketplace for artists of any level to display and sell their works.
          </p>
        </MDBCol>
        <MDBCol className="footer-content" md="3">
          <h5 className="title">About</h5>
          <li className="list-unstyled">
            <a href="#!">Pigment Inc.</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Careers</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Policies</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Contact Us</a>
          </li>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Pigment</a>
      </MDBContainer>
    </div>
  </MDBFooter>
)

export default Footer
