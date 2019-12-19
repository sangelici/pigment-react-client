import React, { Fragment } from 'react'
// import Nav from 'react-bootstrap/Nav'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import Favorites from '../favorites/Favorites.js'
import './ProfileStylesheet.scss'

const Profile = ({ user }) => {
  return (
    <Fragment>
      <div className="user-about">
        <h2>Welcome to {user.email} profile!</h2>
      </div>
      <div className="favorites-index">
        {/* this is where the favorites index will go so I will need to import Favorite here and formate appropriately */}
      </div>
    </Fragment>
  )
}

export default Profile
