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
// import axios from 'axios';
import countriesData from "./csdmv/countries.json";
import {stateOptions,districtOption,villageoptions,mandalOption} from "./csdmv/csdmv";
import DatePicker from 'react-datepicker';

import './add.css'
function Add() {

 
  const [details, setDetails] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
  
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const [formData, setFormData] = useState({
      fullName: '',
      fatherName:'',
      motherName:'',
      dob:'',
      gender:'',
      maritalStatus:'',
      phoneNumber:'',
      email:'',
      empImg:null,
      pan:'',
      aadhaar:'',
      address:'',
      permenentadrs:'',
      emgContact:'',
      emgRelation:'',
      emgNumber:'',
      empId:'',
      doj:'',
      dor:'',
      managerName:'',
      mandal:'',
      salary: '',
      netsalary:'',
      type:'',
      isManager: false,
      designation:'',
      team:'',
      status: '',
      country: '',
      state: '' ,
      exitformalities:'',
      district: '',
      village:'',
      department:'',
      outsource:'',
      lpa:'',
      basic:'',
      hra:'',
      ca:'',
      other:'',
      allowance:'',
      petrolAllow:'',
      pf:'',
      pt:'',
      esi:'',
      genratedeis:'',
      tds:'',
      insurance:'',
      loan:'',
      bankName:'',
      nameapb:'',
      accNo:'',
      uanNumber:'',
      ifscNumber:'',
      course:'',
      courseType:'',
      fromDate: '',
      toDate:'',
      experience:'',
      work:'',
      from:'',
      to:'',
    });
    
  
   const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    handleClose(); // close the modal after selecting a row
  };
 
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue ?? '', // Default to empty string if value is null or undefined
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      empImg: e.target.files[0], // Store the file object
    }));
  };

   
  
      // const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedDesignation, setSelectedDesignation] = useState('');
    const [designations, setDesignations] = useState([]);
    const [selectedvertical, setselectedvertical] = useState('');
      
      const handleDesignationChange = (event) => {
        setSelectedDesignation(event.target.value);
        setselectedvertical(event.target.value);
      };
    

      const handleAddDetail = () => {
        const newDetail = {
          id: Date.now(), // or any unique identifier
          course: formData.course,
          courseType: formData.courseType,
          institution: formData.institution,
          fromDate: formData.fromDate,
          toDate: formData.toDate
        };
      
        setDetails([...details, newDetail]);
      };
    

    // const handleSubmit = async (event) => {
    //   event.preventDefault();
    //   try {
    //     const response = await fetch('http://localhost:5000/api/add', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(formData),
    //     });
  
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
        
    //     alert('Added employee successful');
    //     const data = await response.json();
  
    //     console.log('Server response:', data);
    //   } catch (error) {
    //     console.error('Error adding user:', error);
    //   }
  
    //   // Logic to handle form submission
    //   console.log('Form submitted:', formData);
    // };

    const handleSubmit = async (event) => {
      event.preventDefault();
    
      // Convert formData to FormData for file uploads
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (key === 'empImg' && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else {
          formDataToSend.append(key, formData[key]);
        }
      });
    
      try {
        const response = await fetch('http://localhost:5005/api/add', {
          method: 'POST',
          body: formDataToSend,
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        alert('Employee added successfully');
        const data = await response.json();
        console.log('Server response:', data);
    
        // Optionally reset formData or navigate to another page
       } catch (error) {
        console.error('Error adding employee:', error);
        alert('Failed to add employee. Please try again.');
      }
    };
    
    const handleNext = () => {
      setActiveTab(activeTab + 1);
    };
  
    const handleBack = () => {
      setActiveTab(activeTab - 1);
    };

    return (
        <div className="add" >
          <h2 className='add-empoloyee'>Add Employee</h2>
      <Form onSubmit={handleSubmit}>
        <Tabs id="controlled-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
          <Tab eventKey={0} title="Personal Info">
            <Form.Group >
            <Row>

            <div className="col-6">
              <Form.Label htmlFor='fullName' className='required'>Name</Form.Label>
              <Form.Control type="text" id='fullName' placeholder="Enter name"  name="fullName" value={formData.fullName} onChange={(e) => handleInputChange(e, 'fullName')} required/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='fatherName' className='required'>Father Name</Form.Label>
              <Form.Control type="text" id='fatherName' placeholder="Enter father name"  name="fatherName" value={formData.fatherName} onChange={(e) => handleInputChange(e, 'fatherName')} required/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='motherName'>Mother Name</Form.Label>
              <Form.Control type="text" id='motherName' placeholder="Enter mother name"  name="motherName" value={formData.motherName} onChange={(e) => handleInputChange(e, 'motherName')} />
            </div>

            <div className="col-6">
              <Form.Label htmlFor='dob' className='required'>Date of Birth</Form.Label>
              <Form.Control type="date" id='dob'  placeholder="mm/dd/yyyy"  name="dob" value={formData.dob} onChange={(e) => handleInputChange(e, 'dob')}/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor="gender" className="required">Gender</Form.Label>
              <Form.Select id="gender" name="gender" value={formData.gender} onChange={handleInputChange} >
                <option selected value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </Form.Select>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='maritalStatus'>Marital status</Form.Label>
              <Form.Control type="text" id='maritalStatus' placeholder="Enter Marital status"  name="maritalStatus" value={formData.maritalStatus} onChange={(e) => handleInputChange(e, 'maritalStatus')}/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='phoneNumber' className='required'>Phone Number</Form.Label>
              <Form.Control type="number" id='phoneNumber'  placeholder="Enter phone Number"  name="phoneNumber" value={formData.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')}/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='email' className='required'>Email</Form.Label>
              <Form.Control type="email" id='email'  placeholder="example@gmail.com"  name="email" value={formData.email} onChange={(e) => handleInputChange(e, 'email')} autoComplete='off'/>
            </div>
              
            <div className="col-6">
              <Form.Label htmlFor="address" className="required">Current Address</Form.Label>
              <Form.Control as="textarea" rows={3} id="address" placeholder="Enter Address" name="address" value={formData.address}   required   onChange={handleInputChange} autoComplete="off"/>
            </div>
              
            <div className="col-6">
              <Form.Label htmlFor="permenentadrs" className="required">Permenent Address</Form.Label>
              <Form.Control as="textarea" rows={3} id="permenentadrs" placeholder="Enter permenent address" name="permenentadrs" value={formData.permenentadrs}   required   onChange={handleInputChange} autoComplete="off"/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='empImg'>Employee Image</Form.Label>
              <Form.Control type="file" id='empImg'  placeholder="png"  name="empImg"  onChange={handleFileChange}/>
            </div>
            
            <div className="col-6">
              <Form.Label htmlFor='aadhaar'>Aadhaar card Number</Form.Label>
              <Form.Control type="number" id='aadhaar'  placeholder="Aadhaar number"  name="aadhaar" value={formData.aadhaar}  onChange={handleInputChange}/>
            </div>
            
            <div className="col-6">
              <Form.Label htmlFor='pan'>PAN Number</Form.Label>
              <Form.Control type="text" id='pan'  placeholder="Pan Number"  name="pan" value={formData.pan}  onChange={handleInputChange}/>
            </div>
            
            </Row>
            </Form.Group>

            <Form.Group  >
            <Row>

              <legend>Emergency Contacts</legend>

            <div className="col-6">
              <Form.Label htmlFor='emgContact' className='required'>Name of emergency contact</Form.Label>
              <Form.Control type="text" id='emgContact'  placeholder="Enter contact Name"  name="emgContact" value={formData.emgContact} onChange={(e) => handleInputChange(e, 'emgContact')}/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='emgRelation' className='required'>Relationship to employee</Form.Label>
              <Form.Control type="text" id='emgRelation'  placeholder="Relation"  name="emgRelation" value={formData.emgRelation} onChange={(e) => handleInputChange(e, 'emgRelation')}/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='emgNumber' className='required'>Emergency contact number</Form.Label>
              <Form.Control type="number" id='emgNumber'  placeholder="Number"  name="emgNumber" value={formData.emgNumber} onChange={(e) => handleInputChange(e, 'emgNumber')}/>
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
              <Form.Control type="text" placeholder="Enter Employee-Id" id='empId' name="empId" value={formData.empId} onChange={(e) => handleInputChange(e, 'empId')} required />
            </div>

            <div className="col-6">
              <Form.Label htmlFor='doj' className='required'>Date of joining</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy"id="doj" name="doj" value={formData.doj} onChange={(e) => handleInputChange(e, 'doj')} required/>
            </div>

            <div className="col-6">
              <Form.Label htmlFor='dor'>Date of rejoining</Form.Label>
              <Form.Control type="date" placeholder="mm/dd/yyyy"id="dor" name="dor" value={formData.dor} onChange={(e) => handleInputChange(e, 'dor')} />
            </div>

            <div className="col-6">
              <Form.Label htmlFor='status' className='required'>Employee Status</Form.Label>
              <Form.Select id='status' name='status' value={formData.status} onChange={handleInputChange} required>
                <option selected>Select Employee status</option>
                <option value={"Active"}>Active</option>
                <option value={"Inactive"}>Inactive</option>
                <option value={"Resigned"}>Resigned</option>
                <option value={"Notice"}> Notice period </option>
                <option value={"Absconding"}>Absconding</option>
              </Form.Select>
            </div>

              <div className="col-6">
              <Form.Label htmlFor='type' className='required'>Type</Form.Label>
              <Form.Select name="type" id='type' onChange={(e) => handleInputChange(e, 'type')} value={formData.type} required > 
                <option value={''}>Select Type</option>
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
          <Form.Select id="team"  value={formData.team} name="team" onChange={(e) => handleInputChange(e, 'team')} >
             <option value="">Select Team Nmae</option>
             <option  value="Accountant">Accountant</option>
             <option value="Admin">Admin</option>
             <option value="Electrical">Electrical Commissioning</option>
             <option value="Hr">Human Resources</option>
             <option value="It">IT</option>
             <option value="ItInfra">IT Infrastructure, Sales & Maintenance </option>
             <option value="Telecom">Telecom Services</option>
             <option value="Scanning">Scanning & Digitization</option>
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
          <Form.Select id="designation" name="designation"   value={selectedDesignation} required onChange={(e) => handleInputChange(e, 'designation')}>
          <option>Select Designation</option>
        {designations.map(designation => (
          <option key={designation} value={designation}>{designation}</option>
        ))}
          </Form.Select>
          </Col>
          </div>          

          <div className="col-6">
           {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
          <Col mb-3="true">
          <Form.Check
            inline label="-is Manager"  checked={formData.isManager}  type={type} id={`inline-${type}-1`} name="isManager" className='ismanager' onChange={(e) => handleInputChange(e, 'isManager')} />
            </Col>
          </div>))} 
        </div>
        </div>
        )}

        <div> 
        {formData.type === 'External' && (
              <Row>
              <div className="col-6">
              <Form.Label className="required" htmlFor="department">Department</Form.Label>
          <Col mb-3="true">
          <Form.Select id="department"  value={selecteddepartment} name="department" onChange={(e) => handleInputChange(e, 'department')} >
             <option>Select Team Nmae</option>
             <option value="Accountant">Accountant</option>
             <option value="Admin">Admin</option>
             <option value="Electrial">Electrical Commissioning</option>
             <option value="Hr">Human Resources</option>
             <option value="It">IT</option>
             <option value="ItInfra">IT Infrastructure, Sales & Maintenance </option>
             <option value="Telecom">Telecom Services</option>
             <option value="Scanning">Scanning & Digitization</option>
          </Form.Select>
          </Col>
              </div>
              </Row>
            )}
          </div>

          <div>
          {formData.status === 'Resigned' && ( 
           <Row>
        <div className="col-6">
          <Form.Label className='required' htmlFor='exitformalities'>Exit Formalities</Form.Label>
          <Form.Select id='exitformalities' value={formData.exitformalities} onChange={handleInputChange}>
            <option selected>select status of exit formalities</option>
            <option value={'Completed'}>Completed</option>
            <option value={'Pending'}>Pending</option>
          </Form.Select>
        </div>
        </Row>
           )}
        </div>

        <br />
        
        <legend>Work location</legend>
        <div className="row">
        <div className="col">
                    <Form.Label htmlFor='country' className='required'>Country</Form.Label>
                    <Form.Select name='country' id='country' onChange={(e) => handleInputChange(e, 'country')} autoComplete='off' value={formData.country}>
                      <option value="">Select country</option>
                      {countriesData.map(country => (
                               <option key={country.id} value={country.code}>{country.name}</option>
                      ))}
                    </Form.Select>
               </div>
                
               <div className="col">
        <Form.Label htmlFor='state' className='required'>State</Form.Label>
        <Form.Select name='state' id='state' onChange={(e) => handleInputChange(e, 'state')} value={formData.state}>
          <option value="">Select state</option>
          {formData.country && stateOptions[formData.country].map(state => (
            <option key={state.id} value={state.name}>{state.name}</option>
          ))}
        </Form.Select>
      </div>

      <div className="col">
        <Form.Label htmlFor='district' className='required'>District</Form.Label>
        <Form.Select name='district' id='district' onChange={(e) => handleInputChange(e, 'district')} value={formData.district}>
  <option key="default" value="">Select district</option>
  {formData.state && districtOption[formData.state].map(districtObj => (
    <option key={districtObj.id} value={districtObj.District}>{districtObj.District}</option>
  ))}
</Form.Select>
      </div>
      <div className="col">
        <Form.Label htmlFor='mandal' className='required'>Mandal</Form.Label>
        <Form.Select name='mandal' id='mandal' onChange={(e) => handleInputChange(e, 'mandal')} value={formData.mandal}>
  <option key="default" value="">Select Mandal</option>
  {formData.district && mandalOption[formData.district].map(mandalObj => (
    <option key={mandalObj.id} value={mandalObj.Mandal}>{mandalObj.Mandal}</option>
  ))}
</Form.Select>
      </div>
      <div className="col">
        <Form.Label htmlFor='village' className='required'>Village</Form.Label>
        <Form.Select name='village' id='village' onChange={(e) => handleInputChange(e, 'village')} value={formData.village}>
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
            <Button variant="primary" onClick={handleBack} className='back1'>Back</Button>
            <Button variant="primary" className='next' onClick={handleNext}>Next</Button>
          </Tab>

                    {/** new tab payroll */}

          <Tab eventKey={2} title="Payroll">
          <Form.Group className="mb-3" >
          <Row>

            <div className="col-4">
              <Form.Label htmlFor='nameapb' >Fullname as per bank</Form.Label>
              <Form.Control id='nameapb' name='nameapb' placeholder='Fullname as per bank' type='text' value={formData.nameapb} onChange={handleInputChange} />
            </div>
            
            <div className="col-4">
              <Form.Label htmlFor='bankName'className='required'>Bank Name</Form.Label>
              <Form.Control id='bankName' name='bankName' placeholder='Enter bank Name' type='text' value={formData.bankName} onChange={(e) => handleInputChange(e, 'bankName')} />
            </div>

            <div className="col-4">
              <Form.Label htmlFor='accNo'className='required'>Account Number</Form.Label>
              <Form.Control id='accNo' name='accNo' placeholder='Enter Account Number' type='text' value={formData.accNo} onChange={(e) => handleInputChange(e, 'accNo')} />
            </div>
            <div className="col-4">
              <Form.Label htmlFor='ifscNumber'className='required'>IFSC Number</Form.Label>
              <Form.Control id='ifscNumber' name='ifscNumber' placeholder='Enter IFSC Number' type='text' value={formData.ifscNumber} onChange={(e) => handleInputChange(e, 'ifscNumber')} />
            </div>

            <div className="col-4">
              <Form.Label htmlFor='uanNumber'>UAN Number</Form.Label>
              <Form.Control id='uanNumber' name='uanNumber' placeholder='Enter UAN number' type='text' value={formData.uanNumber} onChange={(e) => handleInputChange(e, 'uanNumber')} />
            </div>

            <div className="col-4">
              <Form.Label  htmlFor="lpa">CTC</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="lpa" name="lpa"value={formData.lpa} placeholder="000000"  onChange={(e) => handleInputChange(e, 'lpa')}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="salary" className="required"> Gross salary per month</Form.Label>
             <Col mb-3="true">
              <Form.Control type="number" id="salary" placeholder="000000" value={formData.salary} name="salary" required onChange={(e) => handleInputChange(e, 'salary')}/>
              </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="netsalary" className="required">Net salary per month</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="netsalary" placeholder="000000" value={formData.netsalary} name="netsalary" required onChange={(e) => handleInputChange(e, 'netsalary')}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="basic" className="required">Basic Salary</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="basic"   placeholder="000000" name="basic"value={formData.basic} required onChange={(e) => handleInputChange(e, 'basic')}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="hra" className="required">HRA</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="hra" name="hra" placeholder="000000" value={formData.hra} required onChange={(e) => handleInputChange(e, 'hra')}/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="ca" className="required">Conveyance Allowance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="ca" name="ca"  placeholder="000000" value={formData.ca} onChange={(e) => handleInputChange(e, 'ca')} required/>
          </Col>
              </div>

              <div className="col-4">
              <Form.Label  htmlFor="allowance" className="required">Other Allowances</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="allowance" name="allowance" value={formData.allowance} placeholder="000000" onChange={(e) => handleInputChange(e, 'allowance')} required/>
          </Col>
              </div>


              <div className="col-4">
              <Form.Label  htmlFor="pf">PF</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="pf" name="pf"  placeholder="00000"  value={formData.pf} onChange={(e) => handleInputChange(e, 'pf')}/>
          </Col>
              </div>


              <div className="col-4">
              <Form.Label  htmlFor="pt">Professional Tax </Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="pt" name="pt"  placeholder="00000" value={formData.pt} onChange={(e) => handleInputChange(e, 'pt')}/>
          </Col>
              </div>

              <div className="col-4">
                <Form.Label  htmlFor="esi" >ESI Number</Form.Label>
                  <Col mb-3="true">
                    <Form.Control type="number" id="esi" name="esi" value={formData.esi} placeholder="00000" onChange={(e) => handleInputChange(e, 'esi')}/>
                  </Col>
              </div>
              <div className="col-4">
                <Form.Label  htmlFor="genratedeis" >Genrated ESI Number</Form.Label>
                  <Col mb-3="true">
                    <Form.Control type="number" id="genratedeis" name="genratedeis" value={formData.genratedeis} placeholder="00000" onChange={(e) => handleInputChange(e, 'genratedeis')}/>
                  </Col>
              </div>

          <div className="col-4">
              <Form.Label  htmlFor="tds">TDS</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="tds" name="tds"  value={formData.tds} placeholder="00000" onChange={(e) => handleInputChange(e, 'tds')}/>
          </Col>
          </div>

            <div className="col-4">
              <Form.Label  htmlFor="insurance">Insurance</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="insurance" name="insurance" value={formData.insurance} placeholder="00000" onChange={(e) => handleInputChange(e, 'insurance')}/>
          </Col>
            </div>

            <div className="col-4">
              <Form.Label  htmlFor="other">Other</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="other" name="other" value={formData.other} placeholder="00000" onChange={(e) => handleInputChange(e, 'other')}/>
          </Col>
            </div>

            <div className="col-4">
              <Form.Label  htmlFor="loan">loan</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="loan" name="loan" value={formData.loan}  placeholder="00000" onChange={(e) => handleInputChange(e, 'loan')}/>
          </Col>
            </div>

              <div className="col-4">
              <Form.Label  htmlFor="petrolAllow" >petrol Allowances</Form.Label>
          <Col mb-3="true">
            <Form.Control type="number" id="petrolAllow" name="petrolAllow" value={formData.petrolAllow} placeholder="000000" onChange={(e) => handleInputChange(e, 'petrolAllow')}/>
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
             <Form.Select id='course' name='course' onChange={(e) => handleInputChange(e, 'course')} value={formData.course}>
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
              <Form.Control id='courseType' name='courseType' type='text'placeholder='Enter course Type (eg: B.Tech)' value={formData.courseType} onChange={(e) => handleInputChange(e, 'courseType')} />  
              </div>

              <div className="col-6">
                <Form.Label htmlFor='institution'>Institution</Form.Label>
                <Form.Control id='institution' name='institution' type='text' value={formData.institution} placeholder='Name of the Institution' onChange={(e) => handleInputChange(e, 'institution')} />
              </div>

              <div className="col-3">
              <Form.Label htmlFor='fromDate'>From Date</Form.Label>
              <DatePicker id='fromDate' name='fromDate'  selected={formData.fromDate} onChange={(date) => handleInputChange({ target: { value: date } }, 'fromDate')}  showYearPicker dateFormat="yyyy"  className='form-control'value={formData.fromDate} />
                </div>

              <div className="col-3">
              <Form.Label htmlFor='toDate'>To Date</Form.Label>
             <DatePicker id='toDate' name='toDate'  selected={formData.toDate} onChange={(toDate) => handleInputChange({ target: { value: toDate } }, 'toDate')}  showYearPicker  dateFormat="yyyy"  className='form-control' value={formData.toDate} />
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
              {details.map((detail) => (
                 <tr key={detail.id}>
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
            <Form.Group className='mb-3'>
              <Row>

                <div className="col-6">
                  <Form.Label htmlFor='experience'> Years Of Work Experience</Form.Label>
                  <Form.Control id='experience' name='experience' placeholder='Enter  number of years' type='number' value={formData.experience}  onChange={(e) => handleInputChange(e, 'experience')} />
                </div>

                <div className="col-6">
                  <Form.Label htmlFor='work'> Previously Worked Company</Form.Label>
                  <Form.Control id='work' name='work' placeholder='Enter company name' type='text' value={formData.work}  onChange={(e) => handleInputChange(e, 'work')} />
                </div>
                
                <div className="col-6">
                  <Form.Label htmlFor='from'> From </Form.Label>
                  <Form.Control id='from' name='from' placeholder='Enter  number of years' type='date' value={formData.from}  onChange={(e) => handleInputChange(e, 'from')} />
                </div>

                <div className="col-6">
                  <Form.Label htmlFor='to'> To </Form.Label>
                  <Form.Control id='to' name='to' placeholder='Enter  number of years' type='date' value={formData.to}  onChange={(e) => handleInputChange(e, 'to')} />
                </div>

              </Row>
            </Form.Group>
            <Button variant="primary" onClick={handleBack}>Back</Button>
            <Button variant="primary" type="submit" className='submit' > Submit </Button>

       
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