import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Apply() {
  return (
    <div className="d-flex flex-column">
            
            
    <div className="d-flex justify-content-center align-items-center vh-100 leave-container">
      <div className="col-xl-4">
    <Card >
    <Card.Header className="text-center bg-primary text-white"><h4>Leave Requst</h4></Card.Header>
    <Card.Body >
      <form action="/leave">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column  htmlFor="fullName" className="required">Name</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="fullName" placeholder="Name" name='fullName' required />
          
          </Col>
          <Form.Label column  htmlFor="empId" className="required">Employee-Id</Form.Label>
          <Col sm="12">
            <Form.Control type="text" id="empId" placeholder="Employee-Id" name='empId' required />
         
          </Col>
          <Form.Label column  htmlFor="lSD" className="required" >Leave Start Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="lSD" name='lsd' placeholder="mm/dd/yyyy"required />
          
          </Col>
          <Form.Label column  htmlFor="led" className="required" >Leave End Date</Form.Label>
          <Col sm="12">
            <Form.Control type="date" id="led" placeholder="mm/dd/yyyy" name='led' required />
         
          </Col>
           <Form.Label className="required" htmlFor="reason">Reason</Form.Label>
           <Col sm="12">
          <Form.Control as="textarea" rows={3}  id="reason"  name='reason' placeholder="Reason for leave application" required/>
           </Col>
        </Form.Group>
      </form>
          <Col sm={{ span: 10,  }}>
      
            <Button variant="primary" type="submit">Apply</Button> 
          </Col>
      
    </Card.Body>
  </Card>
    </div>
      </div>
    </div>
  )
}

export default Apply