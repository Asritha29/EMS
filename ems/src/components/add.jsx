import React from 'react'
import  { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal, Table,Tab,Tabs} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { RiUserSearchLine } from "react-icons/ri";
import { getCountries, getStates, getDistricts } from 'country_state_district';
import axios from 'axios';
import countriesData from "./csdmv/countries.json";
import {stateOptions,districtOption,villageoptions,mandalOption} from "./csdmv/csdmv";
import DatePicker from 'react-datepicker';

import './add.css'
function Add() {

 
    const [details, setDetails] = useState([]);

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
      emgRelation:'',
      emgNumber:'',
      empId:'',
      doj:'',
      managerName:'',
      mandal:'',
      salary: '',
      type:'',
      isManager: false,
      designation:'',
      team:'',
      status: '',
      country: '',
      state: '' ,
      district: '',
      village:'',
      vertical:'',
      outsource:'',
      department:'',
      lPA:'',
      basic:'',
      hra:'',
      ca:'',
      other:'',
      pf:'',
      tax:'',
      esi:'',
      tds:'',
      insurance:'',
      loan:'',
      bankName:'',
      accNo:'',
      uanNumber:'',
      ifscNumber:'',
      course:'',
      fromDate: '',
      toDate:'',
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
    const [country, setCountry] = useState([]);
    const handleChange = (e, name) => {
      const { value, type, checked, selected } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
   
      setFormData(prevState => ({
        ...prevState,
        [name]: newValue,
        
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
  
    const handleAddDetail = () => {
      // Create a new detail object from the form data
      const newDetail = {
        course: formData.course,
        courseType: formData.courseType,
        institution: formData.institution,
        fromDate: formData.fromDate,
        toDate: formData.toDate
      };
    
      // Add the new detail to the details array
      setDetails([...details, newDetail]);
    
  
    };
    

    useEffect(() => {
      // Make GET request to fetch select options from the database
      axios.get('http://localhost:5000/api/country')
      .then(response => {
        // Update state with the fetched options
        setCountry(response.data);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
    
    }, []);

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
              <Form.Label htmlFor='maritalStatus'>Marital status</Form.Label>
              <Form.Control type="text" id='maritalStatus' placeholder="Enter Marital status"  name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}/>
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
              <Form.Label htmlFor='empImg'>Employee Image</Form.Label>
              <Form.Control type="file" id='empImg'  placeholder="png"  name="empImg" value={formData.empImg} onChange={handleChange}/>
              </div>
              
              <div className="col-6">
                <Form.Label htmlFor='address' className='required'>Address</Form.Label>
                <Form.Control as="textarea" rows={3}  id="address"  placeholder="Enter Address " value={formData.address} required onChange={handleChange} autoComplete='off'/>
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
              <Form.Label htmlFor='emgRelation' className='required'>Relationship to employee</Form.Label>
              <Form.Control type="text" id='emgRelation'  placeholder="Relation"  name="emgRelation" value={formData.emgRelation} onChange={handleChange}/>
              </div>

              <div className="col-6">
              <Form.Label htmlFor='emgNumber' className='required'>Emergency contact number</Form.Label>
              <Form.Control type="number" id='emgNumber'  placeholder="Number"  name="emgNumber" value={formData.emgNumber} onChange={handleChange}/>
              </div>
              </Row>
              </Form.Group>
              <br />
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
          </Tab>

                {/* new tab employee details */}

          <Tab eventKey={1} title="Employee details">
            <Form.Group className="mb-3">
            <Row>
              <div className="col-6">
              <Form.Label htmlFor='empId' className='required'>Employee-Id</Form.Label>
              <Form.Control type="text" placeholder="Enter Employee-Id" id='empId' name="empId" value={formData.empId} onChange={handleChange} />
              </div>

              <div className="col-6">
              <Form.Label htmlFor='doj' className='required'>Date of joining</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy"id="doj" name="doj" value={formData.doj} onChange={handleChange} />
              </div>

              <div className="col-6">
              <Form.Label htmlFor='type' className='required'>Type</Form.Label>
              <Form.Select name="type" id='type' onChange={handleChange} value={formData.type} required > 
                <option >Select Type</option>
                <option value={"Internal"}>Internal</option>  
                <option value={"External"}>External</option>
                </Form.Select>
              </div>
              
              <div>
              {formData.type === 'Internal' && (
             <div className='row'>
          <div className="col-6">
          <Form.Label className="required" htmlFor="team">Team</Form.Label>
          <Col mb-3="true">
          <Form.Select id="team"  value={formData.team} name="team" onChange={handleChange} >
             <option>Select Team Nmae</option>
             <option value="accountant">Accountant</option>
             <option value="admin">Admin</option>
             <option value="electrial">Electrical Commissioning</option>
             <option value="hr">Human Resources</option>
             <option value="It">IT</option>
             <option value="ItInfra">IT Infrastructure, Sales & Maintenance </option>
             <option value="telecom">Telecom Services</option>
             <option value="scanning">Scanning & Digitization</option>
          </Form.Select>
          </Col>
         </div>


         <div className="col-6">
        <Form.Label htmlFor="managerName" className='required'>Manager Name</Form.Label>
          <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" onClick={handleShow}><RiUserSearchLine /></InputGroup.Text>
        <Col mb-3="true">
        <Form.Control  placeholder="Manager Name"  id="managerName"  value={selectedRow ? selectedRow.name + (formData.managerName ? ', ' + formData.managerName : '') : ''}  name="managerName"  onChange={handleInputChange} aria-label="Manager name" aria-describedby="basic-addon1" required/>
      </Col>
      </InputGroup>
      </div>

      <div className="col-6">
          <Form.Label htmlFor="designation" className='required'>Designation</Form.Label>
          <Col mb-3="true">
          <Form.Select id="designation" name="designation" value={formData.designation} required onChange={handleChange}>
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
          <Col mb-3="true">
          <Form.Check
            inline label="-is Manager"  checked={formData.isManager}  type={type} id={`inline-${type}-1`} name="isManager" onChange={handleChange} />
            </Col>
          </div>))} 
        </div>
        </div>
        )}
        <br />
        
        <legend>Work location</legend>
        <div className="row">
        <div className="col">
                    <Form.Label htmlFor='country' className='required'>Country</Form.Label>
                    <Form.Select name='country' id='country' onChange={handleChange} autoComplete='off' value={formData.country}>
                      <option value="">Select country</option>
                      {countriesData.map(country => (
                               <option key={country.id} value={country.code}>{country.name}</option>
                      ))}
                    </Form.Select>
               </div>
                
               <div className="col">
        <Form.Label htmlFor='state' className='required'>State</Form.Label>
        <Form.Select name='state' id='state' onChange={handleChange} value={formData.state}>
          <option value="">Select state</option>
          {formData.country && stateOptions[formData.country].map(state => (
            <option key={state.id} value={state.name}>{state.name}</option>
          ))}
        </Form.Select>
      </div>

      <div className="col">
        <Form.Label htmlFor='district' className='required'>District</Form.Label>
        <Form.Select name='district' id='district' onChange={handleChange} value={formData.district}>
  <option key="default" value="">Select district</option>
  {formData.state && districtOption[formData.state].map(districtObj => (
    <option key={districtObj.id} value={districtObj.District}>{districtObj.District}</option>
  ))}
</Form.Select>
      </div>
      <div className="col">
        <Form.Label htmlFor='mandal' className='required'>Mandal</Form.Label>
        <Form.Select name='mandal' id='mandal' onChange={handleChange} value={formData.mandal}>
  <option key="default" value="">Select Mandal</option>
  {formData.district && mandalOption[formData.district].map(mandalObj => (
    <option key={mandalObj.id} value={mandalObj.mandal}>{mandalObj.mandal}</option>
  ))}
</Form.Select>
      </div>
      <div className="col">
        <Form.Label htmlFor='village' className='required'>Village</Form.Label>
        <Form.Select name='village' id='village' onChange={handleChange} value={formData.village}>
  <option key="default" value="">Select village</option>
  {formData.mandal && villageoptions[formData.mandal].map(villageObj => (
    <option key={villageObj.id} value={villageObj.village}>{villageObj.village}</option>
  ))}
</Form.Select>
      </div>

      </div>
        </div>
            </Row>
             </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
          </Tab>

                    {/** new tab payroll */}

          <Tab eventKey={2} title="Payroll">
          <Form.Group className="mb-3" >
          <Row>
            
            <div className="col-4">
              <Form.Label htmlFor='bankName'className='required'>Bank Name</Form.Label>
              <Form.Control id='bankName' name='bankName' placeholder='Enter bank Name' type='text' value={formData.bankName} onChange={handleChange} />
            </div>

            <div className="col-4">
              <Form.Label htmlFor='accNo'className='required'>Account Number</Form.Label>
              <Form.Control id='accNo' name='accNo' placeholder='Enter Account Number' type='text' value={formData.accNo} onChange={handleChange} />
            </div>
            <div className="col-4">
              <Form.Label htmlFor='ifscNumber'className='required'>IFSC Number</Form.Label>
              <Form.Control id='ifscNumber' name='ifscNumber' placeholder='Enter IFSC Number' type='text' value={formData.ifscNumber} onChange={handleChange} />
            </div>

            <div className="col-4">
              <Form.Label htmlFor='uanNumber'>UAN Number</Form.Label>
              <Form.Control id='uanNumber' name='uanNumber' placeholder='Enter UAN number' type='text' value={formData.uanNumber} onChange={handleChange} />
            </div>

            <div className="col-4">
              <Form.Label  htmlFor="lpa">Salary(LPA)</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="lpa" name="lpa"value={formData.lPA} placeholder="000000"  onChange={handleChange}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="salary" className="required">Salary per month</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="salary" placeholder="000000" value={formData.salary} name="salary" required onChange={handleChange}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="basic" className="required">Basic Salary</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="basic"   placeholder="000000" name="basic"value={formData.basic} required onChange={handleChange}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="hra" className="required">HRA</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="hra" name="hra" placeholder="000000" value={formData.hra} required onChange={handleChange}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="ca" className="required">Conveyance Allowance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="ca" name="ca"  placeholder="000000" value={formData.ca} onChange={handleChange} required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="other" className="required">Others</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="other" name="other" value={formData.other} placeholder="000000" onChange={handleChange} required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="pf">PF</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="pf" name="pf"  placeholder="00000"  value={formData.pf} onChange={handleChange}/>
          </Col>
              </div>


              <div className="col-4">
              <Form.Label  htmlFor="tax" className="required">Professional Tax</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="tax" name="tax"  placeholder="00000" value={formData.tax} onChange={handleChange} required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="esi" >ESI</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="esi" name="esi" value={formData.esi} placeholder="00000" onChange={handleChange}/>
          </Col>
          </div>

          <div className="col-4">
              <Form.Label  htmlFor="tds">TDS</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="tds" name="tds"  value={formData.tds} placeholder="00000" onChange={handleChange}/>
          </Col>
          </div>

            <div className="col-4">
              <Form.Label  htmlFor="insurance">Insurance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="insurance" name="insurance" value={formData.insurance} placeholder="00000" onChange={handleChange}/>
          </Col>
            </div>

            <div className="col-4">
              <Form.Label  htmlFor="loan">loan</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="loan" name="loan" value={formData.loan}  placeholder="00000" onChange={handleChange}/>
          </Col>
            </div>

            </Row>
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" onClick={handleNext}  className='next'>Next</Button>
          </Tab>
         
                    {/** new tab Qualification */}

          <Tab eventKey={3} title="Qualifications">
            <Form.Group className="mb-3">
              <Row>

              <div className="col-6">
             <Form.Label htmlFor='course'>Course</Form.Label>
             <Form.Select id='course' name='course' onChange={(e) => handleChange(e, 'course')} value={formData.course}>
             <option value={''}>Select course</option>
              <option value={'secondary education (Class 10)'}>Secondary education (Class 10)</option>
              <option value={'Intermediate(11th and 12th)'}>Intermediate (11th and 12th)</option>
              <option value={'Diploma'}>Diploma</option>
              <option value={'Polytechnic'}>Polytechnic</option>
              <option value={'Associate degree (undergraduate)'}>Associate degree (undergraduate)</option>
              <option value={"Bachelor's degree (undergraduate)"}>Bachelor's degree (undergraduate)</option>
              <option value={"Master's degree (graduate)"}>Master's degree (graduate)</option>
              <option value={"Doctoral degree (graduate)"}>Doctoral degree (graduate)</option>
            </Form.Select>
             </div>

             <div className="col-6">
              <Form.Label htmlFor='courseType'>Course Type</Form.Label> 
              <Form.Control id='courseType' name='courseType' type='text'placeholder='Enter course Type (eg: B.Tech)' value={formData.courseType} onChange={(e) => handleChange(e, 'courseType')} />  
              </div>

              <div className="col-6">
                <Form.Label htmlFor='institution'>Institution</Form.Label>
                <Form.Control id='institution' name='institution' type='text' value={formData.institution} placeholder='Name of the Institution' onChange={(e) => handleChange(e, 'institution')} />
              </div>

              <div className="col-3">
              <Form.Label htmlFor='fromDate'>From Date</Form.Label>
              <DatePicker id='fromDate' name='fromDate'  selected={formData.fromDate} onChange={(date) => handleChange({ target: { value: date } }, 'fromDate')}  showYearPicker dateFormat="yyyy"  className='form-control'value={formData.fromDate} />
                </div>

              <div className="col-3">
              <Form.Label htmlFor='toDate'>To Date</Form.Label>
             <DatePicker id='toDate' name='toDate'  selected={formData.toDate} onChange={(toDate) => handleChange({ target: { value: toDate } }, 'toDate')}  showYearPicker  dateFormat="yyyy"  className='form-control' value={formData.toDate} />
            </div>

             </Row>
             <br />
             <Button type="submit" onClick={handleAddDetail} variant="primary"> Add </Button>

              <Table>
             <thead>
             <tr>
               <th>Course</th>
               <th>Course Type</th>
               <th>Institution</th>
               <th>From Date</th>
               <th>To Date</th>
              
             </tr>
             </thead>
              <tbody>
            {details.map((detail, index) => (
            <tr key={index}>
             <td>{detail.course}</td>
             <td>{detail.courseType}</td>
             <td>{detail.institution}</td>
             <td>{detail.fromDate}</td>
             <td>{detail.toDate}</td>
             
             </tr>   
                 ))}

                </tbody>
                </Table>

             </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
        
          </Tab>

          {/**new tab Experience  */}

          <Tab eventKey={4} title="Experience">
            <Form.Group className='mb-3 row'>
              
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>


        <Col sm={{ span: 10,offset: 5}}>
        {activeTab === 4 && (
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