import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Artworks = props => {
  const [artworks, setArtworks] = useState([])
  useEffect(() => {
    axios(`${apiUrl}/artworks`)
      .then(res => setArtworks(res.data.artworks))
      .then(() => props.alert({ heading: 'Success', message: 'Art Collection!', variant: 'success' }))
      .catch(console.error)
  }, [])

  const artworksJsx = artworks.map(artwork => (
    <ListGroup.Item key={artwork._id} as={'a'} href={`#/artworks/${artwork._id}`}>
      {artwork.title}
    </ListGroup.Item>
  ))

  return (
    <Fragment>
      <h1>Art Gallery!</h1>
      <Link to="/create-artwork">+ Listing</Link>
      <ListGroup>
        {artworksJsx}
      </ListGroup>
    </Fragment>
  )
}

export default Artworks
