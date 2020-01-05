import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'

import './FooterStylesheet.scss'

const Footer = props => (
  <MDBFooter color="blue" className="font-small p-3 col-md-offset-3">
    <MDBContainer fluid className="text-center">
      <h5>ABOUT PIGMENT</h5>
      <p>Pigment is the on stop shop for purusing hundreds of exhibits put together by artists all over.</p>
    </MDBContainer>
    <MDBContainer fluid className="text-center">
      <MDBRow className="footer-row">
        <MDBCol className="footer-content col-md-offset-3" md="6">
          <li className="list-unstyled">
            <a className="link" href="#artworks">Pigment Inc.</a>
          </li>
          <li className="list-unstyled">
            <a className="link" href="#artworks">Careers</a>
          </li>
          <li className="list-unstyled">
            <a className="link" href="#artworks">Policies</a>
          </li>
          <li className="list-unstyled">
            <a className="link" href="#artworks">Contact Us</a>
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
