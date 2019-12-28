import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import './Stylesheet.scss'

const ArtworkForm = ({ artwork, handleChange, handleSubmit, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-0 up-and-in">
      <h3>New Listing</h3>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <Form.Group encType="multipart/form-data">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={handleChange}
            size="lg"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="title"
            placeholder="Artwork Title..."
            value={artwork.title}
            name="title"
            onChange={handleChange}
            size="lg"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="artist"
            placeholder="Artist..."
            value={artwork.artist}
            name="artist"
            onChange={handleChange}
            size="lg"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            required
            id="medium"
            placeholder="Medium: oil, acrylic..."
            value={artwork.medium}
            name="medium"
            onChange={handleChange}
            size="lg"
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              required
              id="size"
              placeholder="Size: #in x #in..."
              value={artwork.size}
              name="size"
              onChange={handleChange}
              size="lg"
            />
          </Form.Group>
          <InputGroup className="mb-3" as={Col} id="price">
            <InputGroup.Prepend>
              <InputGroup.Text style={{ color: 'red' }}>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              aria-label="Amount (to the nearest dollar)"
              required
              id="price"
              placeholder="0000"
              type="number"
              value={artwork.price}
              name="price"
              onChange={handleChange}
              size="lg"
            />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Row>
        <br></br>
        <Form.Group>
          <Form.Label>Add A Description</Form.Label>
          <Form.Control
            required
            id="description"
            placeholder="Add A Description..."
            value={artwork.description}
            name="description"
            onChange={handleChange}
            as="textarea"
            rows="3"
            size="lg"
          />
        </Form.Group>
        <br></br>
        <Button
          className="mx-2"
          variant="primary"
          type="submit"
          size="lg"
        >
          Submit
        </Button>
        <Link to={cancelPath}>
          <Button
            className="mx-2"
            variant="danger"
            size="lg"
          >
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  </div>
)

export default ArtworkForm
