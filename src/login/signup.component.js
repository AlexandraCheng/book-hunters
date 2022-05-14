import React, { Component } from 'react'
import './login.css'

export default class SignUp extends Component {
  render() {
    return (
      <div className='auth-wrapper'>
        <div className='auth-inner'>
        <form>
        <h3>Sign up</h3>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter an alphanumeric value"
          />
        </div>

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
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your age"
          />
        </div>

        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your location"
          />
        </div>

        <div className="mb-3">
          <label>Interests</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your comma-separated list of interests"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/">Log in</a>
        </p>
      </form>
        </div>
      </div>
    )
  }
}
