import React from 'react'
import { Link } from 'react-router-dom'

const ArtworkForm = ({ artwork, handleChange, handleSubmit, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      id="name"
      placeholder="Artwork Name..."
      value={artwork.name}
      name="name"
      onChange={handleChange}
    />
    <input
      id="description"
      placeholder="Description..."
      value={artwork.description}
      name="description"
      onChange={handleChange}
    />
    <input
      id="medium"
      placeholder="Mediums..."
      value={artwork.medium}
      name="medium"
      onChange={handleChange}
    />
    <input
      id="size"
      placeholder="Size..."
      value={artwork.size}
      name="size"
      onChange={handleChange}
    />
    <input
      id="price"
      placeholder="Price..."
      value={artwork.price}
      name="price"
      onChange={handleChange}
    />

    <button type="submit">Create</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default ArtworkForm
