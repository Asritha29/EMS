import React from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className="bg-blue flex flex-column flex-shrink-0  top-0 start-0 end-0">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='text-white'>
          <a className="nav-link" href="#login" style={{ color: 'azure' }}> <i className="bi-person-square"></i>&nbsp; User info</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>  
  );
}

export default Header;
