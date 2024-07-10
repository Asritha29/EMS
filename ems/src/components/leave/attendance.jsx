import React, { useState } from 'react';
import './attendance.css';
import * as XLSX from 'xlsx';
import axios from 'axios'; // Import axios
import { Button, Form } from 'react-bootstrap';

function Attendance() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='attendance'>
            <Form onSubmit={handleFileUpload}> {/* Change to standard HTML form */}
                <Form.Label htmlFor='attendance' >Upload Attendance File:</Form.Label>
                <Form.Control type="file" id='attendance'   name='attendance' onChange={handleFileChange} />
                <Button  type="submit">Upload</Button>
            </Form>
        </div>
    );
}

export default Attendance;
