import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../partials/logo/globus.png"
import './userheader.css'

function Usersidebar() {
  return (
    <div>
    <Navbar className="usertopbar">
        <Container className='stroke'>
          <Navbar.Collapse id="basic-navbar-nav">
          <div style={{ textAlign: 'left', float: 'left' }}>
            <Nav.Link href='https://globusitindia.com/'><img src={Logo} alt="Logo" style={{ width: '300px', height:'90px'}} /></Nav.Link>
          </div>
            <Nav className="globuslogo">
              <Nav.Link href="/user/payslip" >PaySlip</Nav.Link>
              {/* <Nav.Link href="/about">About Us</Nav.Link> */}
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Usersidebar;