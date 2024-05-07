import React, { useState } from "react";
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
      <SideNav.Toggle
          onClick={handleToggle} 
          // Provide an onToggle handler to handle the toggle action
        />
        <SideNav.Nav>
          <NavItem eventKey="home" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <a className="nav-link" href="/" style={{ color: 'black', fontSize: '18px' }}><FiBarChart /></a>
            </NavIcon>
            <NavText ><a className="nav-link" href="/" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif' }}>&nbsp; Dashboard</a></NavText>
          </NavItem>
            <NavItem eventKey="placed_orders">
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <a className="nav-link" href="/add" style={{ color: 'black', fontSize: '18px' }}><IoPersonAddSharp /></a>
            </NavIcon>
            <NavText><a className="nav-link" href="/add" style={{ color: 'black', fontSize: '18px', fontFamily:'sans-serif' }}>&nbsp; Add Employee</a></NavText>
          </NavItem>
            <NavItem eventKey="placed" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <a className="nav-link" href="/atendence" style={{ color: 'black', fontSize: '18px' }}><BsCalendar3 /></a>
            </NavIcon>
            <NavText><a className="nav-link" href="/atendence" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif' }}>&nbsp; Atendence</a></NavText>
          </NavItem>
            <NavItem eventKey="leave" >
            <NavIcon style={{ fontSize: '25px', color: 'black' }}>
              <a className="nav-link" href="/leave" style={{ color: 'black', fontSize: '18px' }}><LuCalendarPlus /></a>
            </NavIcon>
            <NavText><a className="nav-link" href="/leave" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif' }}>&nbsp; Leave Tracking</a></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidebar;
