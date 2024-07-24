import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../partials/logo/globus.png"
import './userheader.css'

function Usersidebar() {
  return (
    <div>
        <Navbar className="flex flex-column  top-0 start-0 end-0" >
            <div className="globuslogo" >
                <img src={Logo} alt='globus Logo' width={300} />
            </div>

            
        </Navbar>
    </div>
  )
}

export default Usersidebar;