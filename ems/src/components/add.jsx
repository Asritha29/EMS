import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Table,Tab,Tabs} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { getCountries, getStates, getDistricts } from 'country_state_district';

import './add.css'
function Add() {

  const [selectedTeam, setSelectedTeam] = useState('');
  const [designations, setDesignations] = useState([]);

    const [activeTab, setActiveTab] = useState(0);
    const [formData, setFormData] = useState({
      fullName: '',
      fatherName:'',
      motherName:'',
      dob:'',
      gender:'',
      maritalStatus:'',
      phoneNumber:'',
      email:'',
      empImg:'',
      address:'',
      emgContact:'',
      empRelation:'',
      emgNumber:'',
      salary: '',
      deployement:'',
      isManager: false,
      designation:'',
      team:'',
    });
    

    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleRowClick = (rowData) => {
      setSelectedRow(rowData);
      handleClose(); // close the modal after selecting a row
    };
  
    const handleInputChange = (e) => {
      // handle input change here
      setManagerName(e.target.value);
      console.log(e.target.value);
    };
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
   ;

    const handleCountryChange = (event) => {
      const country = event.target.value;
      setSelectedCountry(country);
      // Reset state and district selections
      setSelectedState('');
      setSelectedDistrict('');
  };

  const handleStateChange = (event) => {
      const state = event.target.value;
      setSelectedState(state);
      // Reset district selection
      setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
      const district = event.target.value;
      setSelectedDistrict(district);
  };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));

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



    const teamOptions = [
      { value: "accountant", label: "Accountant" },
      { value: "admin", label: "Admin" },
      { value: "electrial", label: "Electrical Commissioning" },
      { value: "hr", label: "Human Resources" },
      { value: "It", label: "IT" },
      { value: "ItInfra", label: "IT Infra" },
      { value: "telecom", label: "Telecom Services" },
      { value: "scanning", label: "Scanning" },
    ];
  
    return (
        <div className="add" >
      <Form onSubmit={handleSubmit}>
        <Tabs id="controlled-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
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
              <Form.Select id='gender' value={formData.gender}>
                <option >Select Gender</option>
                <option >Male</option>
                <option >Female</option>
                <option >Transgender</option>
              </Form.Select>
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
              <Form.Control type="email" id='email'  placeholder="example@gmail.com"  name="email" value={formData.email} onChange={handleChange} autoComplete='off'/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='empImg' className='required'>Employee Image</Form.Label>
              <Form.Control type="file" id='empImg'  placeholder="png"  name="empImg" value={formData.empImg} onChange={handleChange}/>
              </div>
              
              <div className="col-6">
                <Form.Label htmlFor='address' className='required'>Address</Form.Label>
                <Form.Control as="textarea" rows={3}  id="address"  placeholder="Enter Address " required onChange={handleChange} autoComplete='off'/>
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
              <Form.Label htmlFor='empRelation' className='required'>Relationship to employee</Form.Label>
              <Form.Control type="text" id='empRelation'  placeholder="Relation"  name="empRelation" value={formData.empRelation} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='emgNumber' className='required'>emergency contact number</Form.Label>
              <Form.Control type="number" id='emgNumber'  placeholder="Number"  name="emgNumber" value={formData.emgNumber} onChange={handleChange}/>
              </div>
              </Row>
              </Form.Group>
              <br />
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
          </Tab>
          <Tab eventKey={1} title="Employee details">
            <Form.Group className="mb-3">
            <Row>

              <div className="col-6">
              <Form.Label htmlFor='empId' className='required'>Employee-Id</Form.Label>
              <Form.Control type="text" placeholder="Enter Employee-Id" name="empId" value={formData.empId} onChange={handleChange} />
              </div>

              <div className="col-6">
              <Form.Label htmlFor='doj' className='required'>Date of joining</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy" name="doj" value={formData.doj} onChange={handleChange} />
              </div>

              <div className="col-6">
              <Form.Label htmlFor='deployement' className='required'>Deployeement</Form.Label>
              <Form.Select name="deployement"  onChange={handleChange} value={formData.deployement} > 
                <option >Select Deployment</option>
                <option value={"Internal"}>Internal</option>  
                <option value={"External"}>External</option>
                <option value={"OutSource"}>Out Source</option>
                </Form.Select>
              </div>

              <div>
              {formData.deployement === 'Internal' && (
             <div >
          <div className="col-6">
          <Form.Label className="required" htmlFor="team">Team</Form.Label>
          <Col mb-3="true">
          <Form.Select id="team"  value={formData.team} name="team" onChange={handleChange} >
             <option value="">Select Team Nmae</option>
             <option value="accountant">Accountant</option>
             <option value="admin">Admin</option>
             <option value="electrial">Electrical Commissioning</option>
             <option value="hr">Human Resources</option>
             <option value="It">IT</option>
             <option value="ItInfra">IT Infra</option>
             <option value="telecom">Telecom Services</option>
             <option value="scanning">Scanning</option>
          </Form.Select>
          </Col>
         </div>
         <div className="col-6">
        <Form.Label htmlFor="managername">Manager Name</Form.Label>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" onClick={handleShow}><i className="bi bi-search"></i></InputGroup.Text>
        <Col mb-3="true">
        <Form.Control  placeholder="Manager Name"  id="managername" value={selectedRow ? selectedRow.name : ''} name="managerName" onChange={handleInputChange}  aria-label="Manager name" aria-describedby="basic-addon1" />
      </Col>
      </InputGroup>
      </div>
      <div className="col-6">
          <Form.Label htmlFor="designation">Designation</Form.Label>
          <Col mb-3="true">
          <Form.Select id="designation" name="designation"  required >
             <option value="">Select Designation</option>
             {teamOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
          </Form.Select>
          </Col>
          </div>
          <div className="col-6">
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <br />
          <Col mb-3="true">
          <Form.Check
            inline label="-is Manager"  checked={formData.isManager}  type={type} id={`inline-${type}-1`} name="isManager" onChange={handleChange} />
            </Col>
          </div>))}
          
        </div>
        </div>
        )}
        </div>
              <div className="col-6">
              <Form.Label htmlFor='empId' className='required'>Employee-Id</Form.Label>
              <Form.Control type="text" placeholder="Enter Employee-Id" name="empId" value={formData.empId} onChange={handleChange} />
              </div>

            </Row>
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

       {/* popup*/}

       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select a Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => handleRowClick({ name: '1', value: "" })}>
                <td>1</td>
                <td>Row 1</td>
                <td>1</td>
              </tr>
              <tr onClick={() => handleRowClick({ name: 'Row 2', value: 2 })}>
                <td>2</td>
                <td>Row 2</td>
                <td>2</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  };

export default Add