import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

import './FooterStylesheet.scss'

const Footer = props => (
  <MDBFooter color="blue" className="font-small p-3 col-md-offset-3">
    <MDBContainer fluid className="text-center text-md-left">
      <MDBRow className="footer-row">
        <MDBCol className="footer-content col-md-offset-3" md="6">
          <h5 className="title">About</h5>
          <li className="list-unstyled">
            <a href="#artworks">Pigment Inc.</a>
          </li>
          <li className="list-unstyled">
            <a href="#artworks">Careers</a>
          </li>
          <li className="list-unstyled">
            <a href="#artworks">Policies</a>
          </li>
          <li className="list-unstyled">
            <a href="#artworks">Contact Us</a>
          </li>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="#/artworks"> Pigment</a>
      </MDBContainer>
    </div>
  </MDBFooter>
)

export default Footer
