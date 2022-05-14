import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Login from './login/login.component'
import SignUp from './login/signup.component'
import Profile from './profile/App'
import Main from './main/App'

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

    const hasLoggedIn = () => {
		setLoggedIn(!loggedIn);
	};

    return (
      <div className='wrapper'>
          {loggedIn ? (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Book Hunters</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/main">Get recommendations</Nav.Link>
                <Nav.Link href="/profile">My profile</Nav.Link>
                <Nav.Link href="/" onClick={() => hasLoggedIn()}>Logout</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          ) : (
            <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Book Hunters</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Login</Nav.Link>
              <Nav.Link href="/sign-up">Signup</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
          )}
    <Router>
        <Routes>
            <Route exact path="/" element={!loggedIn ? <Login handler={() => hasLoggedIn()}/> : <Main/> }/>
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/main" element={<Main />} />
        </Routes>
    </Router>
    </div>

    );
};

export default App;