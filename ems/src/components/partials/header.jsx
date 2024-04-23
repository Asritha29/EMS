import React, { useState } from 'react';
import './header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const sidebarStyle = {
    width: sidebarVisible ? '100%' : '10%',
    transition: 'width 0.3s ease',
  };

  return (
    <>
      <Navbar className="bg-blue flex flex-column flex-shrink-0 top-0 start-0 end-0" style={sidebarStyle}>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className='text-white'>
              <a className="nav-link" href="#login" style={{ color: 'black' }}> <i className="bi-person-square"></i>&nbsp; User info</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <button className="toggle-button" onClick={toggleSidebar}></button>
    </>
  );
}

export default Header;




