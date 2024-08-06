import React from 'react';
import { Button } from 'react-bootstrap';
// import {Table, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './employee.css';
import { IoPersonAddSharp } from "react-icons/io5";


function Empoloyee() {
    return(
        <div className='employee1'>
        <Button className='addemployee' ><Link to="/add" style={{textDecoration:"none"}} className='addemployee1' ><IoPersonAddSharp/>&nbsp; Add Employee</Link></Button>
        <Button className='addemployee1' ><Link to="/upload" style={{textDecoration:"none"}} className='addemployee1' ><IoPersonAddSharp/>&nbsp; Upload Employees</Link></Button>
        <div className="main-content tableadd">
        <div className="justify-content-center align-items-center">
            <div className="align-self-auto w-100 bg-white rounded p-3 mx-4">
                <div className="table-responsive">
                    <table className="table table-striped text-center ">
                        <thead className="thead">
                        <tr className="table">
                                <th className="align-middle">Employee  ID</th>
                                <th className="align-middle">Name</th>
                                <th className="align-middle">Phone Number</th>
                                <th className="align-middle">E-mail</th>
                                <th className="align-middle">Employee Image</th>
                                <th className="align-middle">Manager Name</th>
                                <th className="align-middle">Designation</th>
                                <th className="align-middle">Work Location</th>
                                <th className="align-middle">Action</th>
                            </tr>
                        </thead>
                        {
                     
                       }
                      
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Empoloyee;