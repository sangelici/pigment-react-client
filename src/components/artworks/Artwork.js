import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import Button from 'react-bootstrap/Button'

const Artwork = props => {
  const [artwork, setArtwork] = useState(null)
  const userId = props.user._id

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

  // console.log(artwork)

  if (!artwork) {
    return <p>Loading...</p>
  }

  return (
    <div className="row one-artwork">
      <div>IMAGE:<img src={artwork.fileUrl} width={200} height={200}/> </div>
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h2>{artwork.title}</h2>
        <p>{artwork.artist}</p>
        <p>${artwork.price}.00</p>
        <hr></hr>
        <p>{artwork.description}</p>
        <p>{artwork.medium}</p>
        <p>Size: {artwork.size}</p>
        {userId === artwork.owner._id && (
          <Fragment>
            <Button href={`#artworks/${props.match.params.id}/edit`} varient="primary" className="mr-2">Update</Button>
            <Button onClick={destroy} variant="danger" className="mr-2">Delete</Button>
          </Fragment>
        )}
        <Button href="#/artworks" variant="secondary">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Artwork)
