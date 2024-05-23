import React, { useState } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import { FaUserCircle } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  

  return (
       <div className="topnav">
        <Navbar expand="lg" fixed="top" className="topnav flex flex-column  top-0 start-0 end-0" >
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <a className="nav-link" href="#login" style={{ color: 'azure' }}> <FaUserCircle /> User info</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
      </div>
     
  );
}

export default Header;




