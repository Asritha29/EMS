import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FiBarChart } from "react-icons/fi";
import { IoPersonAddSharp } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { LuCalendarPlus } from "react-icons/lu";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { TbCalendarUser } from "react-icons/tb";
import { TbCalendarExclamation } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { HiOutlineLogout } from "react-icons/hi";


import './header.css'

function Sidebar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div style={{ backgroundColor: "#e3edfd",height:'100%' }} >
      <SideNav defaultExpanded={isVisible} style={{ backgroundColor: "#e3edfd",height:'100%',position:"fixed" }}>
      <SideNav.Toggle style={{color: 'black'}} className='tong'
          onClick={handleToggle} 
          // Provide an onToggle handler to handle the toggle action
        />
        <SideNav.Nav>
          <NavItem eventKey="home" >
            <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              
              <Link to="/"  style={{ color: 'black', fontSize: '18px' }}><FiBarChart /></Link>
            </NavIcon>
            <NavText ><Link to="/" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Dashboard</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed_orders">
            <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              <Link to="/add" style={{ color: 'black', fontSize: '18px' }}><IoPersonAddSharp /></Link>
            </NavIcon>
            <NavText><Link to="/add" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Add Employee</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed" >
            <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              <Link to="/attendance" style={{ color: 'black', fontSize: '18px' }}><RxCalendar /></Link>
            </NavIcon>
            <NavText><Link to="/attendance" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Attendance</Link></NavText>
          </NavItem>
          <NavItem eventKey="leave" onClick={handleDropdownToggle}>
            <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              <LuCalendarPlus style={{ color: 'black' }}/>
            </NavIcon>
            <NavText style={{ color: 'black', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer' }}>
               Leave Tracking {isDropdownOpen ? <IoMdArrowDropup style={{ color: 'black' }} /> : <IoMdArrowDropdown style={{ color: 'black' }}/>}
            </NavText>
            {isDropdownOpen && (
              <>
                <NavItem eventKey="apply">
                <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              <Link to="/apply" style={{ color: 'black', fontSize: '18px' }}><TbCalendarExclamation /></Link>
            </NavIcon>
                  <NavText>
                    <Link to="/apply" style={{ color: 'black', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>
                       Apply
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="requests">
                <NavIcon style={{ fontSize: '20px', color: 'black' }}>
              <Link to="/requests" style={{ color: 'black', fontSize: '18px' }}><LuCalendarClock /></Link>
            </NavIcon>
                  <NavText>
                    <Link to="/requests" style={{ color: 'black', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>
                       Requests
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="tracking">
                 <NavIcon >
                   <Link  to="/tracking" style={{ fontSize: '20px', color: 'black' }}><TbCalendarUser /></Link>
                 </NavIcon>
                 <NavText>
                    <Link to="/tracking" style={{ color: 'black', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Leaves Track  </Link>
                  </NavText>
                </NavItem>
                </>
                  )}
                  </NavItem>
                  <NavItem eventKey="payslip" >
            <NavIcon>
              <Link to="/payslip" style={{ fontSize: '20px', color: 'black' }}><LiaFileInvoiceDollarSolid /></Link>
            </NavIcon>
            <NavText><Link to="/payslip" style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Pay Slip</Link></NavText>
          </NavItem>
          <NavItem eventKey="logout">
             <NavIcon>
              <Link to="/payslip" style={{ fontSize: '20px', color: 'black' }} ><HiOutlineLogout /></Link>
            </NavIcon>
            <NavText ><Link to="/logout"  style={{ color: 'black', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>Logout</Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidebar;
