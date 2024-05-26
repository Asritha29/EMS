import React from 'react'
import "./payslips.css"
import Globus from './partials/logo/globus.png'
function payslip() {
  return (
    <div className="salary-slip" >
    <table className="empDetail">
      <tr height="100px" >
        <td colspan='8' className='globus1'>
          <img height="90px" className='globus' src={Globus} /><h1 className="companyName">GLOBUS INFORMATICS INDIA PRIVATE LIMITED</h1><h3 className='company'>#6-3-1109/9&10, G.S.Mall, Somajiguda, Hyderabad - 82 <br/>Contact no: 040-48526959 Email:- info@globusitindia.com</h3></td>
       
      </tr>
      <td colSpan={8}><h2 style={{textAlign:'center', fontFamily:'Cambria'}}>Pay Slip</h2></td>

      <tr>
        <th className='employeename'>
          Employee Name
</th>
        <td colspan="2" style={{textAlign:'center'}}>
          Example
</td>
        <th colspan="2" className='employeename'>
          Month
</th>
        <td colspan="2" style={{textAlign:'center'}}>
          ABC123
</td>    
      </tr>


      <tr>
        <th className='employeename'>
          Employee Code
</th>
        <td colspan="2" style={{textAlign:'center'}}>
          XXXXXXXXXXX
</td>
        <th colspan="2">
        
</th>
        <td colspan="2">
          
</td>
      </tr>


      <tr>
        <th className='employeename'>
         Designation
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
         Hr
        </td>
        <th className='employeename' colspan="2" >
         Total Working Days
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
          31
       </td> 
      </tr>

      <tr>
        <th className='employeename' >
          Bank Name
</th>
        <td colspan="2" style={{textAlign:'center'}}> 
          SBI
</td>
        <th className='employeename' colspan="2" >
          Number of Attended
</th>
        <td colspan="2" style={{textAlign:'center'}}>
          30
</td>
      </tr>


      <tr>
         <th className='employeename'>
            Bank Account Number
         </th>
         <td colspan="2" style={{textAlign:'center'}}>
            236565
         </td>
         <th className='employeename' colspan="2">
            Leaves Taken
         </th>
         <td colspan="2" style={{textAlign:'center'}}>
            0
         </td>
      </tr>

      <tr>
        <th className='employeename'> 
            UAN Number
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
            564465456
        </td>
        <th colspan="2" className='employeename'>
            Balance leaves
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
            0
        </td>
      </tr>

      <tr>
        <th  className='employeename'> 
            IFSC Code
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
            564465456
        </td>
        <th colspan="2" className='employeename'>
           Loss Of Pays
        </th>
        <td colspan="2" style={{textAlign:'center'}}>
            0
        </td>
      </tr>


      <tr className="myBackground">
        <th colspan="3" style={{textAlign:'center'}}>
          Income
</th>
        <th colspan="4" style={{textAlign:'center'}}>
          Deductions
</th>
</tr>
      <tr >
        <th  className='employeename'>
          Particulars
</th>
        <th colspan="2" style={{textAlign:'center'}} className='employeename'>
          Amount
</th>
        <th colspan="2" className='employeename' >
          Particulars
</th>
        <th colspan="2" style={{textAlign:'center'}}>
          Amount
</th>
      </tr>

      <tr>
        <th  className='employeename'>
          Basic Salary
</th>
        <td style={{textAlign:'center'}} colspan="2">
          4935.00
</td>
        <th colspan="2" className='employeename' >
          Provident Fund(PF)
</th >

        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >


      <tr>
        <th className='employeename'>
        House Rent Allowance(HRA)
</th>
        <td style={{textAlign:'center'}} colspan="2">
          10000
</td>
        <th colspan="2" className='employeename' >
          Professional Tax
</th >
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >


      <tr>
        <th  className='employeename'>
         Conveyance Allowance
</th>
        <td style={{textAlign:'center'}} colspan="2"> 
          00.00
</td>
        <th colspan="2" className='employeename' >
          ESI
</th >
        <td style={{textAlign:'center'}} colspan="2" >
          00.00
</td>
      </tr >


      <tr>
        <th className='employeename'>
        Medical Allowance  
</th>      
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
        <th colspan="2" className='employeename' >
          Absent
</th >
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >

      <tr>
        <th  className='employeename'>
          Others
</th>
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
        <th colspan="2" className='employeename'>
          TDS
</th > 
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >


      <tr>
        <th  className='employeename'>
         Total
</th> 
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
        <th colspan="2"className='employeename' >
          Total
</th >        
        <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >

      <tr>
        <th >
         <br />
</th>
        
        <td colspan="2" >
       
</td>
        <th colspan="2" >
        
</th >
        
        <td colspan="2">
       
</td>
      </tr >

      <tr>
        <th colspan="5">
          <br/>
</th>
       
        <th colspan="2" >
         
</th >
      </tr >


      <tr>
        <th colspan="5" className='employeename' style={{textAlign:'center'}}>
            Net Salary
        </th>
            <td style={{textAlign:'center'}} colspan="2">
          00.00
</td>
      </tr >

      <tr>
       
        <th colspan="2" >
         <br />
         <br/>
     </th >
        <th colspan="4" >
         <br />
      </th >      
      </tr >

      <tr>
       
        <th colspan="2" style={{textAlign:'center'}}>
          Employee Signature
          </th > 
        <th colspan="4" style={{textAlign:'center'}} >
          Employer Signature
          </th >        
      </tr >
    </table >

  </div >

  )
}

export default payslip