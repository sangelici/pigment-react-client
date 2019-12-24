// this is where the user will make an axios request to GET all favorites.
// this list will show up in the Profile
// this is where the user can make an axios request to POST a favorite of an artwork.
// potential to toggle the POST and DELETE request on a single button on an artwork listing

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import axios from 'axios'
// import apiUrl from '../../apiConfig.js'

class Favorite extends Component {
  constructor () {
    super()

    this.state = {
      favorites: null
    }
  }

  render () {
    return (
      <h1></h1>
    )
  }
}

export default withRouter(Favorite)
