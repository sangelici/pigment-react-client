import React from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Stylesheet.scss'

const ArtworkForm = ({ artwork, handleChange, handleSubmit, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5 up-and-in">
      <h3>New Listing</h3>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group>
          <Form.Label htmlFor="image file"></Form.Label>
          <Form.Control
            type="file"
            className="form-control mb-4 alt-color"
            value={artwork.fileType}
            name="file"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="title">Title:</Form.Label>
          <Form.Control
            id="title"
            placeholder="Title..."
            value={artwork.title}
            name="title"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="artist">Artist:</Form.Label>
          <Form.Control
            id="artist"
            placeholder="Artist..."
            value={artwork.artist}
            name="artist"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="medium">Medium:</Form.Label>
          <Form.Control
            required
            id="medium"
            placeholder="Oil, Acrylic..."
            value={artwork.medium}
            name="medium"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="size">Size:</Form.Label>
          <Form.Control
            required
            id="size"
            placeholder="#in x #in..."
            value={artwork.size}
            name="size"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="price">Price:</Form.Label>
          <Form.Control
            required
            id="price"
            placeholder="0000"
            type="number"
            value={artwork.price}
            name="price"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Label htmlFor="description">Description:</Form.Label>
        <br></br>
        <textarea
          required
          id="description"
          placeholder="Description..."
          value={artwork.description}
          name="description"
          onChange={handleChange}
          rows="4"
        >
        </textarea>
        <br></br>
        <br></br>
        <Button
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        <Link to={cancelPath}>
          <Button
            variant="primary"
          >
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default ArtworkForm
