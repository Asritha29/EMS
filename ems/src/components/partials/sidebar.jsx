import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { FiBarChart } from "react-icons/fi";
import { MdOutlinePerson } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { LuCalendarPlus } from "react-icons/lu";
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { TbCalendarUser } from "react-icons/tb";
import { TbCalendarExclamation } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { HiOutlineLogout } from "react-icons/hi";
import logo from "../partials/logo/EMS.png"


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
    <div style={{ backgroundColor: "#2C2C54",height:'100%' }} >
      <SideNav defaultExpanded={isVisible} style={{ backgroundColor: "#2C2C54",height:'100%',position:"fixed" }}>
      <SideNav.Toggle style={{color: 'azure'}} className='tong'
          onClick={handleToggle} 
          // Provide an onToggle handler to handle the toggle action
        />
        <SideNav.Nav>
        <div style={{ textAlign: 'center', padding: '10px 0' }}>
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
        </div>
          <NavItem eventKey="home" >
            <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              
              <Link to="/"  style={{ color: 'azure', fontSize: '18px' }}><FiBarChart  className="icon1"/></Link>
            </NavIcon>
            <NavText ><Link to="/" style={{ color: 'azure', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none'  }}> Dashboard</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed_orders">
            <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              <Link to="/employee" style={{ color: 'azure', fontSize: '18px' }}><MdOutlinePerson className="icon1" /></Link>
            </NavIcon>
            <NavText><Link to="/employee" style={{ color: 'azure', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Employee</Link></NavText>
          </NavItem>
            <NavItem eventKey="placed" >
            <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              <Link to="/attendance" style={{ color: 'azure', fontSize: '18px' }}><RxCalendar className="icon1" /></Link>
            </NavIcon>
            <NavText><Link to="/attendance" style={{ color: 'azure', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Attendance</Link></NavText>
          </NavItem>
          <NavItem eventKey="leave" onClick={handleDropdownToggle}>
            <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              <LuCalendarPlus style={{ color: 'azure' }}/>
            </NavIcon>
            <NavText style={{ color: 'azure', fontSize: '18px', fontFamily: 'sans-serif', cursor: 'pointer' }}>
               Leave Tracking {isDropdownOpen ? <IoMdArrowDropup style={{ color: 'azure' }} /> : <IoMdArrowDropdown style={{ color: 'azure' }} className="icon1"/>}
            </NavText>
            {isDropdownOpen && (
              <>
                <NavItem eventKey="apply">
                <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              <Link to="/apply" style={{ color: 'azure', fontSize: '18px' }}><TbCalendarExclamation className="icon1" /></Link>
            </NavIcon>
                  <NavText>
                    <Link to="/apply" style={{ color: 'azure', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>
                       Apply
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="requests">
                <NavIcon style={{ fontSize: '20px', color: 'azure' }}>
              <Link to="/requests" style={{ color: 'azure', fontSize: '18px' }}><LuCalendarClock className="icon1" /></Link>
            </NavIcon>
                  <NavText>
                    <Link to="/requests" style={{ color: 'azure', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>
                       Requests
                    </Link>
                  </NavText>
                </NavItem>
                <NavItem eventKey="tracking">
                 <NavIcon >
                   <Link  to="/tracking" style={{ fontSize: '20px', color: 'azure' }}><TbCalendarUser className="icon1" /></Link>
                 </NavIcon>
                 <NavText>
                    <Link to="/tracking" style={{ color: 'azure', fontSize: '18px', fontFamily: 'sans-serif', textDecoration: 'none' }}>Leaves Track  </Link>
                  </NavText>
                </NavItem>
                </>
                  )}
                  </NavItem>
                  <NavItem eventKey="payslip" >
            <NavIcon>
              <Link to="/payslip" style={{ fontSize: '20px', color: 'azure' }}><LiaFileInvoiceDollarSolid className="icon1" /></Link>
            </NavIcon>
            <NavText><Link to="/payslip" style={{ color: 'azure', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}> Pay Slip</Link></NavText>
          </NavItem>
          <NavItem eventKey="logout">
             <NavIcon>
              <Link to="/payslip" style={{ fontSize: '20px', color: 'azure' }} ><HiOutlineLogout className="icon1" /></Link>
            </NavIcon>
            <NavText ><Link to="/logout"  style={{ color: 'azure', fontSize: '18px',fontFamily:'sans-serif', textDecoration: 'none' }}>Logout</Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidebar;
