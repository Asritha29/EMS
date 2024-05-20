import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FiBarChart } from "react-icons/fi";
import { IoPersonAddSharp } from "react-icons/io5";
import { BsCalendar3 } from "react-icons/bs";
import { LuCalendarPlus } from "react-icons/lu";

import './header.css'

function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ backgroundColor: "#e3edfd",height:'100%' }} >
      <SideNav defaultExpanded={isVisible} style={{ backgroundColor: "#e3edfd",height:'100%',position:"fixed" }}>
      <SideNav.Toggle style={{color: 'black'}}
          onClick={handleToggle} 
          // Provide an onToggle handler to handle the toggle action
        />
        <SideNav.Nav>
          <NavItem eventKey="home" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              
              <Link to="/"  style={{ color: 'black', fontSize: '18px' }}><FiBarChart /></Link>
            </NavIcon>
            <NavText ><Link to="/" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>&nbsp; Dashboard</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed_orders">
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <Link to="/add" style={{ color: 'black', fontSize: '18px' }}><IoPersonAddSharp /></Link>
            </NavIcon>
            <NavText><Link to="/add" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>&nbsp; Add Employee</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <Link to="/atendence" style={{ color: 'black', fontSize: '18px' }}><BsCalendar3 /></Link>
            </NavIcon>
            <NavText><Link to="/atendence" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>&nbsp; Atendence</Link></NavText>
          </NavItem>
            <NavItem eventKey="leave" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <Link to="/apply" style={{ color: 'black', fontSize: '18px' }}><LuCalendarPlus /></Link>
            </NavIcon>
            <NavText><Link to="/apply" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>&nbsp; Leave Tracking</Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidebar;
