import React, { useState } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';

import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  

  return (
       <div className="topnav">
        <Navbar
          expand="lg"
          className="topnav"
     >
          <Navbar.Brand href=""><h6 style={{textAlign:'center',color:'black'}}>Userinfo</h6></Navbar.Brand>
        </Navbar>
      </div>
     
  );
}

export default Header;




