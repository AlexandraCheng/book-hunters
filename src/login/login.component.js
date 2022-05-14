import React, { Component } from 'react'
import './login.css'
import Nav from 'react-bootstrap/Nav';

export default class Login extends Component {
  render() {

    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
        <form>
        <h3>Log in</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-outline-primary" onClick={this.props.handler}>
          <Nav.Link href="/">Let me in</Nav.Link>
          </button>
        </div>
        <p className="forgot-password text-right">
          No account? <a href="/sign-up">Sign up</a>
        </p>
      </form>
        </div>
      </div>
    )
  }
}
