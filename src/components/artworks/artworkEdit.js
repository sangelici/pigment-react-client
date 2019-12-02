import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import ArtworkForm from './artworkForm.js'

const ArtworkEdit = props => {
  const [artwork, setArtwork] = useState({ title: '', description: '', medium: '', size: '', price: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/artworks/${props.match.params.id}`)
      .then(res => setArtwork(res.body.artwork))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setArtwork(artwork => ({ ...artwork, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { artwork }
    })
      .then(res => {
        props.alert({ heading: 'Success', message: 'Listing updated', variant: 'success' })
        setUpdated(true)
      })
      .catch(() => props.alert({ heading: 'Uh oh', message: 'Something went wrong, please come back later', variant: 'danger' }))
  }

  if (updated) {
    return <Redirect to={`/artworks/${props.match.params.id}`} />
  }

  return (
    <ArtworkForm
      artwork={artwork}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath={`/artworks/${props.match.params.id}`}
    />
  )
}

export default withRouter(ArtworkEdit)
