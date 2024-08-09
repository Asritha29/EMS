import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import Logo from '../partials/logo/globus.png'; // make sure to import your logo
import { useAuth } from '../auth/authcontext';

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use login function from context

  function parseJwt(token) {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Failed to parse JWT:', e);
      return {};
    }
  }
  
  async function loginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5006/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }
  
      const data = await response.json();
      if (!data.token) {
        throw new Error('Invalid login response. No token provided.');
      }
  
      localStorage.setItem('token', data.token);
      const userRole = parseJwt(data.token).role;
  
      login({ role: userRole }); // Set user in context
  
      // Debugging: Check the role and navigation
      console.log('User role:', userRole);
      console.log('Navigating to:', userRole === 'User' ? '/user' : '/dashboard');
  
      if (userRole === 'User') {
        navigate('/user');
      } else if (userRole === 'Admin' || userRole === 'Hr') {
        navigate('/dashboard');
      } else {
        console.error('Unknown user role:', userRole);
        alert('Unexpected user role.');
      }
  
      alert('Login successful');
    } catch (error) {
      alert(error.message);
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
              <Form.Label column sm="3" htmlFor="phoneNumber" style={{ fontWeight: 'bold' }}>Phone Number:</Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text" // Changed from 'phoneNumber' to 'text'
                  value={phoneNumber}
                  id="phoneNumber"
                  autoComplete="off"
                  placeholder="000000000"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  name="phoneNumber"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3" htmlFor="password" style={{ fontWeight: 'bold' }}>Password:</Form.Label>
              <Col sm="8">
                <Form.Control
                  type="password"
                  id="password"
                  value={password}
                  autoComplete="off"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 5 }}>
                <Button className="back1" type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
