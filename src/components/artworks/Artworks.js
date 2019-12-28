import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { MDBContainer, MDBRow } from 'mdbreact'
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
    </Fragment>
  )
}

export default Artworks
