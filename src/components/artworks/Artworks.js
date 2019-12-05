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
    <Col xs={4} key={artwork._id} as={'a'} href={`#/artworks/${artwork._id}`}>
      <img src={artwork.fileUrl} width="200px" height="200px"/>
      <br></br>
      {artwork.title}
    </Col>
  ))

  return (
    <Fragment>
      <div>
        <ListGroup className="artworks">
          <h1>Gallery</h1>
          <Link to="/create-artwork">+Listing</Link>
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
