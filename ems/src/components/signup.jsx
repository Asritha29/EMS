import React, { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { json } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import './home.css'

function Signup() {
    const [fullname, setFullname] = useState('');
    const [empId, setEmpId] = useState('');
    const [password, setPassword] = useState('');
    const [role , setRole] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');



    const navigate = useNavigate();

    async function signupUser(event) {
        event.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/api/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email,
                  password,
                  role,
                  empId,
                  fullname
              })
          });
      
          if (!response.ok) {           
              throw new Error('Failed to sign up. Please try again later.');
          }
      
          const data = await response.json();
      
          if (data.status === 'ok') {
              alert('User created successfully');
              window.location.href = '/';
              history.push('/login');
          }
      } catch (error) {
          console.error('Error:', error.message);
          if (error.message.includes('duplicate key error')) {
              alert('Email or Employee-Id already exists. Please use a different email or Employee-Id.');
          } else {
              alert('Failed to sign up. Please try again later.');
          }
      }
      
}
    
  return ( 
    <div className="d-flex justify-content-center align-items-center vh-100">

    <Card className="col-lg-5 mx-3 mt-1">
    <Card.Header className="text-center bg-primary text-white"><h4>Signup</h4></Card.Header>
    <Card.Body>
      <form onSubmit={signupUser}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="3" htmlFor="fullname" className="required">Name</Form.Label>
          <Col sm="9">
            <Form.Control type="text" id="fullname" placeholder="Name" value={fullname} name="fullname" onChange={(e) => setFullname(e.target.value)}  required/>
          <br />
          </Col>
          <Form.Label column sm="3" htmlFor="email" className="required" >Email</Form.Label>
              <Col sm="9">
                <Form.Control type="email" value={email}  id="email" autoComplete="off" placeholder="example@email.com"  onChange={(e) => setEmail(e.target.value)} name="email" required />
              <br />
              </Col>
          <Form.Label column sm="3" htmlFor="empId" className="required">Employee-Id</Form.Label>
          <Col sm="9">
            <Form.Control type="text" id="empId" name="empId" placeholder="Employee Id" value={empId} onChange={(e) => setEmpId(e.target.value)} required/>
          <br />
          </Col>
          <Form.Label column sm="3" htmlFor="password" className="required">Password</Form.Label>
          <Col sm="9">
            <Form.Control type="password" id="password" aria-describedby="passwordHelpBlock" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </Col>
          <Form.Text id="passwordHelpBlock" muted>
       Your password must be 8-20 characters long, contain letters and numbers, special characters, and must not contain spaces, or emoji.
          </Form.Text>
          
          <Form.Label column sm='3' htmlFor="role" className="required">
    <br/>Role
</Form.Label>
<Col sm="9">
    <br />
    <Form.Select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="HR">HR</option>
        <option value="User">User</option>
    </Form.Select>
</Col>


          <br />
          <br />
          <Col sm={{ span: 11, offset: 5 }}>
          <br /> 
            <Button variant="primary" type="submit">Signup</Button> 
          </Col>
        </Form.Group>
      </form>
      <p style={{ textAlign: 'center', color: 'black' }}>{'Already have an account?'}<a href="./login">Signin</a></p>
    </Card.Body>
  </Card>
    </div>
);
}

export default Signup;