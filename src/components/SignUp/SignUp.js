import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../index.scss'

class SignUp extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/artworks'))
      .catch(error => {
        console.error(error)
        this.setState({ name: '', email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, email, password, passwordConfirmation } = this.state

    return (
      <Container>
        <Row>
          <Col sm={10} md={8} className="mx-auto up-and-in">
            <h3>SIGN UP</h3>
            <br></br>
            <Form onSubmit={this.onSignUp}>
              <Form.Group controlId="name">
                <Form.Control
                  required
                  name="name"
                  value={name}
                  placeholder="Name..."
                  onChange={this.handleChange}
                  size="lg"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email..."
                  onChange={this.handleChange}
                  autoComplete="username"
                  size="lg"
                />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Control
                    required
                    name="password"
                    value={password}
                    type="password"
                    placeholder="Password..."
                    onChange={this.handleChange}
                    autoComplete="new-password"
                    size="lg"
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPasswordConfirmation">
                  <Form.Control
                    required
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    type="password"
                    placeholder="Confirm Password..."
                    onChange={this.handleChange}
                    autoComplete="new-password"
                    size="lg"
                  />
                </Form.Group>
              </Form.Row>
              <Button
                className="mt-3 btn-lg btn-block"
                variant="primary"
                type="submit"
                size="lg"
              >
                Register
              </Button>
              <Nav.Link className="mt-5 toggle" href="#sign-in">Already have an account? Sign In!</Nav.Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(SignUp)
