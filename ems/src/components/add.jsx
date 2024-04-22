import React from 'react'
import { useState } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Table,Tab,Tabs} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import './add.css'
function Add() {
    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
      name: '',
      salary: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleNext = () => {
      setActiveTab(activeTab + 1);
    };
    const handleBack = () => {
      setActiveTab(activeTab - 1);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Logic to handle form submission
      console.log('Form submitted:', formData);
    };
  
    return (
        <div className="add">
      <Form onSubmit={handleSubmit}>
        <Tabs
          id="controlled-tabs"
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-3"
        >
          <Tab eventKey={0} title="Personal Info">
            <Row>
            <Form.Group >
            <div className="col-6">
              <Form.Label htmlFor='fullName' className='required'>Name</Form.Label>
              <Form.Control type="text" id='fullName' placeholder="Enter name"  name="fullName" value={formData.fullName} onChange={handleChange} required/>
            
              <Form.Label htmlFor='fatherName' className='required'>Father Name</Form.Label>
              <Form.Control type="text" id='fatherName' placeholder="Enter father name"  name="fatherName" value={formData.fatherName} onChange={handleChange} required/>
              
              <Form.Label htmlFor='motherName' className='required'>Mother Name</Form.Label>
              <Form.Control type="text" id='motherName' placeholder="Enter mother name"  name="motherName" value={formData.motherName} onChange={handleChange} required/>
              
              <Form.Label htmlFor='dob' className='required'>Date of Birth</Form.Label>
              <Form.Control type="date" id='dob'  placeholder="mm/dd/yyyy"  name="dob" value={formData.dob} onChange={handleChange}/>
              
              <Form.Label htmlFor='phoneNumber' className='required'>Phone Number</Form.Label>
              <Form.Control type="numbre" id='phoneNumber'  placeholder="Enter phone Number"  name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
              
              <Form.Label htmlFor='email' className='required'>Email</Form.Label>
              <Form.Control type="email" id='email'  placeholder="example@gmail.com"  name="email" value={formData.email} onChange={handleChange}/>
              
              <Form.Label htmlFor='empImg' className='required'>Employee Image</Form.Label>
              <Form.Control type="file" id='empImg'  placeholder="png"  name="empImg" value={formData.empImg} onChange={handleChange}/>
              </div>
            </Form.Group>
              </Row>
              <Row>
              <Form.Group  >
             <legend>Emergency Contacts</legend>
              <div className="col-6">
              <Form.Label htmlFor='emgContact' className='required'>Name of emergency contact</Form.Label>
              <Form.Control type="text" id='emgContact'  placeholder="Enter Name"  name="emgContact" value={formData.empImg} onChange={handleChange}/>
              </div>
              </Form.Group>
              </Row>
              <br />
            <Button variant="primary" onClick={handleNext}>Next</Button>
          </Tab>
          <Tab eventKey={1} title="Employee details">
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter salary" 
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" onClick={handleNext}>Next</Button>
          </Tab>
          <Tab eventKey={2} title="pay Roll">
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter salary" 
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" onClick={handleNext}  className='float-right'>Next</Button>
          </Tab>
         
          <Tab eventKey={3} title="Qualifications">
            <Form.Group className="mb-3" controlId="formBasicSalary">
              <Form.Label>Salary</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter salary" 
                name="salary"
                value={formData.salary}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" onClick={handleNext}>Next</Button>
          </Tab>
        </Tabs>
        {activeTab === 3 && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
      </div>
    );
  };

export default Add