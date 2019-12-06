import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import { Container, Row, Col } from 'react-bootstrap'
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
    <Col className="artworks" xs={3} key={artwork._id} as={'a'} href={`#/artworks/${artwork._id}`}>
      <div>
        <img src={artwork.fileUrl} width="300px" height="400px"/>
        <p>{artwork.title} - ${artwork.price}</p>
      </div>
    </Col>
  ))

  return (
    <Fragment>
      <div>
        <ListGroup className="artworks">
          <h1>Gallery</h1>
          <Link className="create" to="/create-artwork">
            +Listing
          </Link>
          <hr></hr>
          <div className="gallery-blurb">
            <h5>Explore the collection!</h5>
            <p>Our gallery is full of pieces made by independent artists all over</p>
          </div>
          <Container fluid={true}>
            <Row>
              {artworksJsx}
            </Row>
          </Container>
        </ListGroup>
      </div>
    </Fragment>
  )
}

export default Artworks
