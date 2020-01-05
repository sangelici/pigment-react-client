import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
// STYLESHEET
import '../../index.scss'
// LANDING
import Homepage from '../Homepage/Homepage.js'
// Artworks
import Artworks from '../artworks/Artworks.js'
import Artwork from '../artworks/Artwork.js'
import CreateArtwork from '../artworks/CreateArtworks.js'
import ArtworkEdit from '../artworks/artworkEdit.js'
// Profile
// import Profile from '../profile/Profile.js'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container-fluid">
          <Header user={user}/>
          <Route exact path='/' render={() => (
            <Homepage />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <Fragment>
              <ChangePassword alert={this.alert} user={user} />
            </Fragment>
          )} />
          <AuthenticatedRoute exact path='/artworks' user={user} render={() => (
            <Fragment>
              <Artworks alert={this.alert}/>

            </Fragment>
          )} />
          <AuthenticatedRoute exact path='/artworks/:id' user={user} render={() => (
            <Fragment>
              <Artwork alert={this.alert} user={user}/>
            </Fragment>
          )} />
          <AuthenticatedRoute exact path='/create-artwork' user={user} render={() => (
            <Fragment>
              <CreateArtwork alert={this.alert} user={user} />
            </Fragment>
          )} />
          <AuthenticatedRoute exact path='/artworks/:id/edit' user={user} render={() => (
            <Fragment>
              <ArtworkEdit alert={this.alert} user={user} />
            </Fragment>
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
