
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoPersonAddSharp } from 'react-icons/io5';
import './employee.css'

function Employee() {
    const [employees, setEmployees] = useState([]);

    const getEmployee = async () => {
        try {
            const response = await fetch('http://localhost:5006/admin/employee', {
                method: 'GET',
            });
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employee data:', error);
        }
    };

    useEffect(() => {
        getEmployee();
    }, []);

    return (
        <div className='employee1'>
            <Button className='addemployee'>
                <Link to="/add" style={{ textDecoration: "none" }} className='addemployee1'>
                    <IoPersonAddSharp />&nbsp; Add Employee
                </Link>
            </Button>
            <Button className='addemployee1'>
                <Link to="/upload" style={{ textDecoration: "none" }} className='addemployee1'>
                    <IoPersonAddSharp />&nbsp; Upload Employees
                </Link>
            </Button>
            <div className="main-content tableadd">
                <div className="justify-content-center align-items-center">
                    <div className="align-self-auto w-100 bg-white rounded p-3 mx-4">
                        <div className="table-responsive">
                            <table className="table table-striped text-center ">
                                <thead className="thead">
                                    <tr className="table">
                                        <th className="align-middle">Employee ID</th>
                                        <th className="align-middle">Employee Name</th>
                                        <th className="align-middle">Phone Number</th>
                                        <th className="align-middle">E-mail</th>
                                        <th className="align-middle">Employee Image</th>
                                        <th className="align-middle">Manager Name</th>
                                        <th className="align-middle">Designation</th>
                                        <th className="align-middle">Work Location</th>
                                        <th className="align-middle">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee._id}>
                                            <td>{employee.empId}</td>
                                            <td>{employee.fullName}</td>
                                            <td>{employee.phoneNumber}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <img src={employee.image} alt="Employee" style={{ width: '50px', height: '50px' }} />
                                            </td>
                                            <td>{employee.managerName}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.workLocation}</td>
                                            <td>
                                                <Button className='back1' ><Link to='/view' className='addemployee1' >view</Link></Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;
