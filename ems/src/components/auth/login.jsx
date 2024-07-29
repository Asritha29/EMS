import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Logo from '../partials/logo/globus.png'; // make sure to import your logo

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      const data = await response.json();
      console.log('Server response:', data); // Log the server response to inspect it

      if (!data.token) {
        throw new Error('Invalid login response. No token provided.');
      }

      localStorage.setItem('token', data.token);

      // Assuming the token contains role information
      const userRole = parseJwt(data.token).role;

      if (userRole === 'user') {
        navigate('/userpage');
      } else if (userRole === 'admin') {
        navigate('/dashboard');
      }

      alert('Login successful');
    } catch (error) {
      alert(error.message);
    }
  }

  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Failed to parse JWT:', e);
      return null;
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="col-lg-5 mx-3 mt-1">
        <Card.Header className="text-center login text-white">
          <img src={Logo} alt="globus" className="globuslogin" />
          <h4 style={{ color: '#474787', fontWeight: 'bold' }}>Login</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={loginUser}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" htmlFor="email">Email</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  value={email}
                  id="email"
                  autoComplete="off"
                  placeholder="example@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" htmlFor="password">Password</Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="off"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers, special characters, and must not contain spaces, or emoji.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 5 }}>
                <Button className="loginbutton" type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Form>
          {/* <p style={{ textAlign: 'center', color: 'black' }}>Don't have an account? <Link to="/signup">Signup</Link></p> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
