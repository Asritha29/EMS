import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
      return new bootstrap.Dropdown(dropdownToggleEl);
    });

    return (
        <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block sidebar ${sidebarOpen ? '' : 'collapse'}`}>
        <button className="btn btn-primary toggle-button d-md-none" onClick={toggleSidebar}>
            {sidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <div className="position-sticky pt-4 sidebar-sticky">
            <div className="flex flex-column flex-shrink-0 p-3 bs-info-text-emphasis" style={{ width: '280px' }} id="element1">
                <div className="container" id="element2">
                    <a className="navbar-brand" href="/"><h3 style={{ color:'black' }}>EMS</h3></a>
                    <div id="my-nav">
                        <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/" style={{ color:'black' }}><i className="bi bi-bar-chart"></i>&nbsp; Dashboard</a>
                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/add" style={{ color: 'black' }}><i className="bi bi-person-plus-fill"></i>&nbsp; Add Employee</a>
                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/EMS/attendance" style={{ color: 'black' }}><i className="bi bi-calendar2-event"></i>&nbsp; Attendance Tracker</a>

                                </li>
                                <li className="nav-item active navbar-text">
                                    <a className="nav-link" href="/EMS/payslip" style={{ color: 'black' }}><i className="bi bi-file-earmark-arrow-down"></i>&nbsp; PaySlip</a>
                                </li>
                                 <li className="nav-item dropdown list-unstyled components">
                                   <a className="nav-link dropdown-toggle" href="#" role="button" id="leaveDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: 'black' }}>
                                         <i className="bi bi-node-plus-fill"></i>&nbsp; Leave Tracking</a>
                                       <ul className="dropdown-menu collapse list-unstyled" aria-labelledby="leaveDropdown">
                                        <li><a className="dropdown-item" href="/EMS/leave">Leave Requests</a></li>
                                        <li><a className="dropdown-item" href="/EMS/leavetracking">Leave Tracking</a></li>
                                </ul>
                               </li>
                                 <li className="nav-item active navbar-text">
                                    <a href="#" className="nav-link" data-bs-toggle="modal" data-bs-target="#logoutModal" style={{ color: 'black' }}><i className="bi bi-box-arrow-right"></i>&nbsp; Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Logout Confirmation</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to logout?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <a href="/logout" className="btn btn-primary">Yes, Logout</a> 
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;
