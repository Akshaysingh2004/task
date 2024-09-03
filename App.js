import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import MainPage from './Components/MainPage';
import { signOut } from './redux/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';

;

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const toggleForm = () => {
    setIsSignUp(prev => !prev);
  };

  return (
    <Router>
      <Container>
        <Navbar bg="light" sticky="top">
          {/* Navbar content */}
        </Navbar>
        <Routes>
          <Route
            path="/main"
            element={isLoggedIn ? <MainPage handleSignOut={handleSignOut} /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/main" />
              ) : (
                isSignUp ? (
                  <SignUp toggleForm={toggleForm} />
                ) : (
                  <SignIn toggleForm={toggleForm} />
                )
              )
            }
          />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
