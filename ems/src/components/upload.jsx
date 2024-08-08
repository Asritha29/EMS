import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';

function Upload() {
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [alertClass, setAlertClass] = useState('alert alert-danger');

  // Handle file selection
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    let fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
    if (selectedFile) {
      if (fileType.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };
      } else {
        setTypeError('Please select only Excel file types');
        setExcelFile(null);
      }
    } else {
      setTypeError('Please select a file');
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (excelFile !== null) {
      const formData = new FormData();
      formData.append('file', new Blob([excelFile], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), 'file.xlsx');
  
      // Read the Excel file before sending
      readXlsxFile(excelFile).then((rows) => {
        const headers = rows[0];
        const file = rows.slice(1).map((row) => {
          let rowData = {};
          row.forEach((cell, index) => {
            rowData[headers[index]] = cell;
          });
          return rowData;
        });
        setExcelData(file.slice(0, 10)); // Displaying only the first 10 rows
  
        // Now send the file to the server
        fetch('http://localhost:5006/employe/upload', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Network response was not ok. Status: ${response.status}`);
            }
            return response.json();
          })
          .then((file) => {
            console.log('Success:', file);
            setTypeError('uploaded successfully');
            setTypeError('Uploaded successfully');
            setAlertClass('alert alert-success');
          })
          .catch((error) => {
            console.error('Error during fetch:', error);
            setTypeError(`Error uploading file: ${error.message}`);
          });
      }).catch((error) => {
        console.error('Error reading Excel file:', error);
        setTypeError('Error reading Excel file');
      });
    } else {
      setTypeError('Please select a file before uploading');
    }
  };  

  return (
    <div>
      <form className='form-group custom-form' onSubmit={handleSubmit}>
        <input type='file' className='form-control' required onChange={handleFile} />
        <button type='submit' className='btn btn-success btn-md'>Upload</button>
        {typeError && (
          <div className={alertClass} role='alert'>{typeError}</div>
        )}
      </form>
      
      <div className="viewer">
        {excelData ? (
          <div className='table-responsive'> 
            <table className="table table-bordered">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.map((individualExcelData, index) => (
                  <tr key={index}>
                    {Object.keys(individualExcelData).map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>No file uploaded yet!</div>
        )}
      </div>
    </div>
  );
}

export default Upload;
