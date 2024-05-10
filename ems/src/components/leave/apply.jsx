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
        method: 'POST', // Corrected to uppercase
        headers: {
          'Content-Type': 'application/json' // Corrected case
        },
        body: JSON.stringify({
          fullName,
          empId,
          lsd,
          led,
          reason
        }) // Corrected typo in JSON.stringify()
      });
  
      if (!apply.ok) {
        throw new Error('Failed to apply leave. Please try again later.');
      }
  
      const data = await apply.json();
  
      if (data.status === 'ok') {
        history.push('/tracking');
      }
    } catch (error) {
      console.error('Error:', error.message);
      if (error.message.includes('Employee-Id')) { // Corrected error message
      alert('Employee-Id does not exist or does not match.');
      } else {
      alert('Leave application failed.');
      }
    
  }
  }


  return (
    <div className="d-flex flex-column apply">
            
            
    <div className="d-flex justify-content-center align-items-center vh-100 leave-container">
      <div className="col-xl-4 ">
    <Card >
    <Card.Header className="text-center bg-primary text-white"><h4>Leave Requst</h4></Card.Header>
    <Card.Body >
      <Form onSubmit={applyLeave}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column  htmlFor="fullName" className="required">Name</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="fullName" placeholder="Name" name='fullName' value={fullName} onChange={(e) => setFullname(e.target.value)} required />
          
          </Col>
          <Form.Label column  htmlFor="empId" className="required">Employee-Id</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="empId" placeholder="Employee-Id" name='empId'value={empId} onChange={(e) => setEmpId(e.target.value)} required />
         
          </Col>
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
      </Form>
          <Col sm={{ span: 10,  }}>
      
          <Col sm={{ span: 11, offset: 5 }}>
          <br /> 
            <Button variant="primary" type="submit">Apply</Button> 
          </Col> 
          </Col>
      
    </Card.Body>
  </Card>
    </div>
      </div>
    </div>
  )
}

export default Apply