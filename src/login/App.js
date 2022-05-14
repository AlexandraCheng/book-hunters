import React from 'react'
import './login.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Book Hunters</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/sign-in">Login</Nav.Link>
              <Nav.Link href="/sign-up">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
