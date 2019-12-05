import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import ArtworkForm from './artworkForm.js'

const ArtworkEdit = props => {
  const [artwork, setArtwork] = useState({ file: '', title: '', artist: '', description: '', medium: '', size: '', price: '' })
  const [updated, setUpdated] = useState(false)

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

  const handleChange = event => {
    event.persist()
    setArtwork(artwork => ({ ...artwork, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(event.target)
    const formData = new FormData(event.target)
    const iterator = formData.entries()
    console.log(iterator.next().value)
    console.log(iterator.next().value)
    console.log(iterator.next().value)

    axios({
      url: `${apiUrl}/artworks/${props.match.params.id}`,
      method: 'PATCH',
      contentType: false,
      processData: false,
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: formData
    })
      .then(res => {
        setUpdated(true)
        props.alert({ heading: 'Success', message: 'Listing updated', variant: 'success' })
      })
      .catch(props.alert({ heading: 'Uh oh', message: 'Something went wrong, please come back later', variant: 'danger' }))
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
