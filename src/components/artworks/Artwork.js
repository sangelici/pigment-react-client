import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Button from 'react-bootstrap/Button'

const Artwork = props => {
  const [artwork, setArtwork] = useState(null)
  const [favorited, setFavorited] = useState(false)
  const userId = props.user._id

  library.add(fas, far)

  useEffect(() => {
    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(res => setArtwork(res.data.artwork))
      .catch(() => props.alert({ heading: 'Error', message: 'Couldn\'t retrieve the requested artwork', variant: 'danger' }))
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'Listing Deleted', variant: 'warning' })
        props.history.push('/artworks')
      })
      .catch(() => props.alert({ heading: 'Uh Oh', message: 'Something when wrong!', variant: 'danger' }))
  }

  // toggle favorite method
  const toggleFavorite = () => setFavorited(!favorited)

  // console.log(artwork)

  if (!artwork) {
    return <Col sm={8} className="mx-auto mt-5 fa-3x col-sm-offset-2"><FontAwesomeIcon className=" loading-icon fa-spin" icon={['fas', 'spinner']}/></Col>
  }

  return (
    <Container fluid={true}>
      <Row className="one-artwork">
        <Col sm={6} className=" mx-auto mt-5 col-sm-offset-3">
          <img className="img-thumbnail" src={artwork.fileUrl} width={400} height={500}/>
        </Col>
        <Col sm={6} className="mx-auto mt-5 col-sm-offset-3">
          <p><span>{artwork.title}</span> - {artwork.artist}</p>
          <p>${artwork.price}.00</p>
          <hr></hr>
          <h5>Description:</h5>
          <p>{artwork.description}</p>
          <h5>Medium:</h5>
          <p>{artwork.medium}</p>
          <h5>Size:</h5>
          <p>{artwork.size}</p>
          {userId !== artwork.owner._id && (
            <button id="swapHeart" onClick={toggleFavorite} className="mr-2 btn btn-default swap">
              {favorited ? <FontAwesomeIcon icon={['fas', 'heart']} color="red"/> : <FontAwesomeIcon icon={['far', 'heart']} color="red" /> }
            </button>
          )}
          {/* If the artwork belongs to the user, the update/delete options appear */}
          {userId === artwork.owner._id && (
            <Fragment>
              <Button href={`#artworks/${props.match.params.id}/edit`} varient="primary" className="mr-2">Update</Button>
              <Button onClick={destroy} variant="danger" className="mr-2">Delete</Button>
            </Fragment>
          )}
          <Button href="#/artworks" variant="secondary" className="mr-2">Back</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Artwork)
