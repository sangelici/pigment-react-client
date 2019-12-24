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
      <div className="col-sm-6 mx-auto mt-5">
        <img className="img" src={artwork.fileUrl} width={500} height={600}/>
      </div>
      <div className="col-sm-6 mx-auto mt-5">
        <p><span>{artwork.title}</span> - {artwork.artist}</p>
        <p>${artwork.price}.00</p>
        <hr></hr>
        <h5>Description:</h5>
        <p>{artwork.description}</p>
        <h5>Medium:</h5>
        <p>{artwork.medium}</p>
        <h5>Size:</h5>
        <p>{artwork.size}</p>
        {/* If the artwork belongs to the user, the update/delete options appear */}
        {userId === artwork.owner._id && (
          <Fragment>
            <Button href={`#artworks/${props.match.params.id}/edit`} varient="primary" className="mr-2">Update</Button>
            <Button onClick={destroy} variant="danger" className="mr-2">Delete</Button>
          </Fragment>
        )}
        <Button href="#/artworks" variant="secondary" className="mr-2">Back</Button>
      </div>
    </div>
  )
}

export default withRouter(Artwork)
