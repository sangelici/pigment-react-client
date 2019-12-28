import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import { Container, Row, Col } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../index.scss'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/artworks'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <Container>
        <Row className="sign-in">
          <Col sm={10} md={8} className="mx-auto up-and-in">
            <h3>SIGN IN</h3>
            <br></br>
            <Form onSubmit={this.onSignIn}>
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
              <Form.Group controlId="password">
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password..."
                  onChange={this.handleChange}
                  autoComplete="current-password"
                  size="lg"
                />
              </Form.Group>
              <Button
                className="mt-4 btn-lg btn-block"
                variant="primary"
                type="submit"
                size="lg"
              >
                Login
              </Button>
              <Nav.Link className="mt-5 toggle" href="#sign-up">Don&apos;t have an account yet? Sign Up!</Nav.Link>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(SignIn)
