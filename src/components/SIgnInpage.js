import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import forgotimg from '../img/SignInPageimg.svg';

import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('https://giriaj-trading-backend.onrender.com/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const { token } = data;
        localStorage.setItem('userToken', token);
        onSignIn(email);
        toast.success('Sign in successful!');
      } else {
        console.error('Sign in failed:', data.error);
        toast.error('Sign in failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center align-items-center">
        <Col md={6}>
          <img src={forgotimg} alt="SignInPageImage" className="img-fluid" />
        </Col>

        <Col md={6}>
          <h2 className="mt-5 mb-3">Sign In</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button className="learn-more-button" type="button" onClick={handleSignIn}>
              Sign In
            </Button>

            <Row className="mt-3">
              <Col>
                {/* <Link to="/forgotPassword" className="forgot-password-link">
                  Forgot Password?
                </Link> */}
              </Col>
              <Col className="text-right">
                <Link to="/signup" className="create-account-link">
                  Create New Account
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default SignInPage;
