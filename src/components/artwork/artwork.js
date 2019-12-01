import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import Button from 'react-bootstrap/Button'

const Artwork = props => {
  const [artwork, setArtwork] = useState(null)
  const userId = props.user._id

  useEffect(() => {
    axios(`${apiUrl}/arworks/${props.match.params.id}`)
      .then(res => setArtwork(res.data.artwork))
      .catch(() => props.alert({ heading: 'Failure', message: 'Couldn\'t retrieve piece', variant: 'danger' }))
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'DELETE',
      header: {
        'Authorization': `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        props.alert({ heading: 'Success', message: 'Listing Deleted', variant: 'warning' })
        props.history.push('/artworks')
      })
      .catch(() => props.alert({ heading: 'Uh Oh', message: 'Something when wrong!', variant: 'danger' }))
  }

  if (!artwork) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{artwork.title}</h2>
      <h3>{artwork.author}</h3>
      {/* if the userId is the owner of the book, they will have access to the 'Delete' and 'Update options' */}
      {userId === artwork.owner._id && (
        <Fragment>
          <Button href={`#artworks/${props.match.params.id}/edit`} varient="primary" className="mr-2">Update</Button>
          <Button onClick={destroy} variant="danger" className="mr-2">Delete</Button>
        </Fragment>
      )}
      {/* back button that will reroute user to the books list */}
      <Button href="#/artworks" variant="secondary">Back</Button>
    </div>
  )
}

export default withRouter(Artwork)