import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './leave.css'

function Apply() {
  const [fullName,setFullname] = useState('');
  const [empId, setEmpId ] = useState('');
  const[lsd, setLsd] = useState('');
  const[led, setLed] = useState('');
  const[reason, setReason] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  async function applyLeave(event) {
    event.preventDefault();

    try {
      const apply = await fetch('http://localhost:5000/api/apply', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              fullName,
              empId,
              lsd,
              led,
              reason
          })
      });
  
      if (!apply.ok) {
          throw new Error('Failed to apply leave. Please try again later.');
      }
  
      const data = await apply.json();
  
      if (data.status === 'ok') {
        alert('Leave applied successfully');
          window.location.href = '/tracking'; // Redirect after successful form submission
      }
  } catch (error) {
      console.error('Error:', error.message);
      if (error.message.includes('Employee-Id')) {
          alert('Employee-Id does not exist or does not match.');
      } else {
          setErrorMessage('Leave is not applied');
      }
  }
  }


  return (
    <div className="d-flex flex-column apply">
            
            
    <div className="d-flex justify-content-center align-items-center vh-100 leave-container">
      <div className="col-xl-5 ">
    <Card >
    <Card.Header className="text-center bg-primary text-white"><h4>Leave Application</h4></Card.Header>
    <Card.Body >
      <Form onSubmit={applyLeave}>
        <Form.Group as={Row} className="mb-3">
         
          <Form.Label column  htmlFor="lSD" className="required" >Leave Start Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="lSD" name='lsd' placeholder="mm/dd/yyyy" value={lsd} onChange={(e) => setLsd(e.target.value)} required />
          
          </Col>
          <Form.Label column  htmlFor="led" className="required" >Leave End Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="led" placeholder="mm/dd/yyyy" name='led' value={led} onChange={(e) => setLed(e.target.value)} required />
         
          </Col>
           <Form.Label className="required" htmlFor="reason">Reason</Form.Label>
           <Col sm="12">
          <Form.Control as="textarea" rows={3}  id="reason"  name='reason' placeholder="Reason for leave application" value={reason} onChange={(e) => setReason(e.target.value)} required/>
           </Col>
        </Form.Group>
          
         <Col sm={{ span: 11, offset: 5 }}>
          <br /> 
            <Button variant="primary" type="submit">Apply</Button> 
          </Col> 
        
      </Form>
      
    </Card.Body>
  </Card>
    </div>
      </div>
    </div>
  )
}

export default Apply