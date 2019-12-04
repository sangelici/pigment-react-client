import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig.js'
import ArtworkForm from './artworkForm.js'

const CreateArtwork = props => {
  const [ artwork, setArtwork ] = useState({ file: '', title: '', artist: '', description: '', medium: '', size: '', price: '' })
  const [ createArtworkId ] = useState(null)

  const handleChange = event => {
    event.persist()
    // console.log(event.target.value)
    setArtwork({ ...artwork, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = document.getElementById('artwork-form')
    const formData = new FormData(form)
    // formData.append('file', artwork.file)
    // formData.append('artwork', artwork)

    console.log(artwork)
    axios({
      url: `${apiUrl}/artworks`,
      formData,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${props.user.token}`
      },
      data: formData
    })
      .then(console.log)
      .then(res => {
        props.alert({ heading: 'Success', message: 'Listing created', variant: 'success' })
        props.history.push(`/artworks/${res.data.artwork._id}`)
      })
      .catch(props.alert({ heading: 'Error', message: 'Something went wrong, please try again', variant: 'danger' }))
  }

  if (createArtworkId) {
    return <Redirect to={`/artworks/${createArtworkId}`} />
  }

  return (
    <ArtworkForm
      artwork={artwork}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      cancelPath="/"
    />
  )
}

export default withRouter(CreateArtwork)
