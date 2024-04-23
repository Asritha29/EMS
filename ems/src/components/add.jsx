import React from 'react'
import  { useState, useEffect } from 'react';
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
            <Form.Group >
            <Row>
            <div className="col-6">
              <Form.Label htmlFor='fullName' className='required'>Name</Form.Label>
              <Form.Control type="text" id='fullName' placeholder="Enter name"  name="fullName" value={formData.fullName} onChange={handleChange} required/>
              </div>

            <div className="col-6">
              <Form.Label htmlFor='fatherName' className='required'>Father Name</Form.Label>
              <Form.Control type="text" id='fatherName' placeholder="Enter father name"  name="fatherName" value={formData.fatherName} onChange={handleChange} required/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='motherName' className='required'>Mother Name</Form.Label>
              <Form.Control type="text" id='motherName' placeholder="Enter mother name"  name="motherName" value={formData.motherName} onChange={handleChange} required/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='dob' className='required'>Date of Birth</Form.Label>
              <Form.Control type="date" id='dob'  placeholder="mm/dd/yyyy"  name="dob" value={formData.dob} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='gender' className='required'>Gender</Form.Label>
              <Form.Control type="text" id='gender' placeholder="Enter Gender"  name="gender" value={formData.gender} onChange={handleChange} required/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='maritalStatus' className='required'>Marital status</Form.Label>
              <Form.Control type="text" id='maritalStatus' placeholder="Enter Marital status"  name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='phoneNumber' className='required'>Phone Number</Form.Label>
              <Form.Control type="number" id='phoneNumber'  placeholder="Enter phone Number"  name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='email' className='required'>Email</Form.Label>
              <Form.Control type="email" id='email'  placeholder="example@gmail.com"  name="email" value={formData.email} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='empImg' className='required'>Employee Image</Form.Label>
              <Form.Control type="file" id='empImg'  placeholder="png"  name="empImg" value={formData.empImg} onChange={handleChange}/>
              </div>
              </Row>
            </Form.Group>

              <Form.Group  >
              <Row>
             <legend>Emergency Contacts</legend>
              <div className="col-6">
              <Form.Label htmlFor='emgContact' className='required'>Name of emergency contact</Form.Label>
              <Form.Control type="text" id='emgContact'  placeholder="Enter contact Name"  name="emgContact" value={formData.emgContact} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='emprelation' className='required'>Relationship to employee</Form.Label>
              <Form.Control type="text" id='emprelation'  placeholder="Relation"  name="emprelation" value={formData.emprelation} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='emgnumber' className='required'>emergency contact number</Form.Label>
              <Form.Control type="number" id='emgnumber'  placeholder="Number"  name="emgnumber" value={formData.emgnumber} onChange={handleChange}/>
              </div>
              </Row>
              </Form.Group>

              <Form.Group>
                <Row>
                <legend>Address</legend> 

                <div className="col-6">
                <Form.Label htmlFor='hoNo' className='required'>Ho:no/flat no</Form.Label>
                <Form.Control type="text" id='hoNo'  placeholder="ho:no"  name="hoNo" value={formData.hoNo} onChange={handleChange}/>
                </div>

                <div className="col-6">
                <Form.Label htmlFor='street' className='required'>Street</Form.Label>
                <Form.Control type="text" id='street'  placeholder="Street"  name="street" value={formData.street} onChange={handleChange}/>
                </div>

                
              
                </Row>
              </Form.Group>
              <br />
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
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
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
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
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" onClick={handleNext}  className='next'>Next</Button>
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
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
        <Col sm={{ span: 10,offset: 5}}>
        {activeTab === 3 && (
          <Button variant="primary" type="submit" className='submit' > Submit </Button>
        )}
           </Col>
          </Tab>
        </Tabs>
      </Form>
      </div>
    );
  };

export default Add