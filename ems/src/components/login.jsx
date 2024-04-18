import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";



function Login() {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')


   async  function loginUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
   
    const data = await response.json();
    
    console.log(data);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="col-lg-5 mx-3 mt-1">
        <Card.Header className="text-center bg-primary text-white"><h4>Login</h4></Card.Header>
        <Card.Body>
          <Form onSubmit={loginUser}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" htmlFor="email">Email</Form.Label>
              <Col sm="10">
                <Form.Control type="email" value={email}  id="email" autoComplete="off" placeholder="example@email.com"  onChange={(e) => setEmail(e.target.value)} name="email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2" htmlFor="password">Password</Form.Label>
              <Col sm="10">
                <Form.Control type="password" id="password" value={password} autoComplete="off" aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <Form.Text id="passwordHelpBlock" muted>
                  Your password must be 8-20 characters long, contain letters and numbers, special characters, and must not contain spaces, or emoji.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="primary" type="submit">Login</Button>
              </Col>
            </Form.Group>
          </Form>
          <p style={{ textAlign: 'center', color: 'black' }}>Don't have an account? <a href="./signup">Signup</a></p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
