import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import './Stylesheet.scss'

const Artworks = props => {
  const [artworks, setArtworks] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/artworks`)
      .then(res => setArtworks(res.data.artworks))
      .then(() => props.alert({ heading: 'Success', message: 'Art Collection!', variant: 'success' }))
      .catch(console.error)
  }, [])

  const artworksJsx = artworks.map(artwork => (
    <Col className="artworks" sm={6} md={4} key={artwork._id} as={'a'} href={`#/artworks/${artwork._id}`}>
      <div className="menu-item">
        <img src={artwork.fileUrl} width="300px" height="400px"/>
        <p className="mt-3 mb-0">{artwork.title} - ${artwork.price}</p>
      </div>
    </Col>
  ))

  return (
    <Fragment>
      <ListGroup className="artworks">
        <h1>GALLERY</h1>
        <Link className="create" to="/create-artwork">
          +Artwork
        </Link>
        <hr></hr>
        <div className="gallery-blurb">
          <h5>Explore the collection!</h5>
          <p>Our gallery is full of pieces made by independent artists all over</p>
        </div>
        <MDBContainer fluid={true}>
          <MDBRow>
            {artworksJsx}
          </MDBRow>
        </MDBContainer>
      </ListGroup>
      <MDBFooter color="blue" className="font-small p-3 col-md-offset-3">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol className="footer-content" md="3">
              <h5 className="title">PIGMENT </h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
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
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </Fragment>
  )
}

export default Artworks
