import React from 'react'
import "./payslips.css"
function payslip() {
  return (
    <div className="salary-slip" >
    <table className="empDetail">
      <tr height="100px" style={{backgroundColor: '#c2d69b'}}>
        <td colspan='4'>
          <img height="90px" src='https://organisationmedia.toggleflow.com/demo/logo.png' /></td>
        <td colspan='4' className="companyName"> Co-Operative Bank Ltd.</td>
      </tr>
      <tr>
        <th>
          Name
</th>
        <td>
          Example
</td>
        <td></td>
        <th>
          Bank Code
</th>
        <td>
          ABC123
</td>
        <td></td>
        <th>
          Branch Name
</th>
        <td>
          ABC123
</td>
      </tr>
      <tr>
        <th>
          Employee Code
</th>
        <td>
          XXXXXXXXXXX
</td>
        <td></td>
        <th>
          Bank Name
</th>
        <td>
          XXXXXXXXXXX
</td>
        <td></td>
        <th>
          Payslip no.
</th>
        <td>
          XXXXXXXXXX
</td>
      </tr>
      <tr>
        <th>
          Cost Centre
</th>
        <td>
          XXXXXXXXXXX
</td><td></td>
        <th>
          Bank Branch
</th>
        <td>
          XXXXXXXXXX
</td><td></td>
        <th>
          Pay Period
</th>
        <td>
          XXXXXXXXXXX
</td>
      </tr>
      <tr>
        <th>
          CC Description:
</th>
        <td>
          XXXXXXXXXXX
</td><td></td>
        <th>
          Bank A/C no.
</th>
        <td>
          XXXXXXXXXX
</td><td></td>
        <th>
          Personel Area
</th>
        <td>
          XXXXXXXXXX
</td>
      </tr>
      <tr>
        <th>
          Grade:
</th>
        <td>
          18
</td><td></td>
        <th>
          Employee Group
</th>
        <td>
          Sales Manager
</td><td></td>
        <th>
          PAN No:
</th>
        <td>
          MOP72182E
</td>
      </tr>
      <tr className="myBackground">
        <th colspan="2">
          Payments
</th>
        <th >
          Particular
</th>
        <th className="table-border-right">
          Amount (Rs.)
</th>
        <th colspan="2">
          Deductions
</th>
        <th >
          Particular
</th>
        <th >
          Amount (Rs.)
</th>
      </tr>
      <tr>
        <th colspan="2">
          Basic Salary
</th>
        <td></td>
        <td className="myAlign">
          4935.00
</td>
        <th colspan="2" >
          Provident Fund
</th >
        <td></td>

        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Fixed Dearness Allowance
</th>
        <td></td>

        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          LIC
</th >
        <td></td>

        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Variable Dearness Allowance
</th>
        <td></td>

        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Loan
</th >
        <td></td>

        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          House Rent Allowance
</th>
        <td></td>
        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Professional Tax
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Graduation Allowance
</th>
        <td></td>

        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Security Deposite(SD)
</th >
        <td></td>

        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Conveyance Allowance
</th> <td></td>
        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Staff Benefit(SB)
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Post Allowance
</th>
        <td></td>
        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Labour Welfare Fund
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <th colspan="2">
          Special Allowance
</th>
        <td></td>
        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          NSC
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <td colspan="4" className="table-border-right"></td>
        <th colspan="2" >
          Union Thanco Officer(UTO)
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <td colspan="4" className="table-border-right"></td>
        <th colspan="2" >
          Advance
</th >
        <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <td colspan="4" className="table-border-right"></td>
        <th colspan="2" >
          Income Tax
</th > <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr className="myBackground">
        <th colspan="3">
          Total Payments
</th>
        <td className="myAlign">
          10000
</td>
        <th colspan="3" >
          Total Deductions
</th >
        <td className="myAlign">
          1000
</td>
      </tr >
      <tr height="40px">
        <th colspan="2">
          Projection for Financial Year:
        </th>
        <th>
        </th>
        <td className="table-border-right">
        </td>
        <th colspan="2" className="table-border-bottom" >
          Net Salary
        </th >
        <td >
        </td>
        <td >
          XXXXXXXXXX
        </td>
      </tr >
      <tr>
        <td colspan="2">
          Gross Salary
        </td> <td></td>
        <td className="myAlign">
          00.00
</td><td colspan="4"></td>
      </tr >
      <tr>
        <td colspan="2">
          Aggr. Dedu - P.Tax & Std Ded
</td> <td></td>
        <td className="myAlign">
          00.00
</td>
        <th colspan="2" >
          Cumulative
</th >
        <td colspan="2"></td>
      </tr >
      <tr>
        <td colspan="2">
          Gross Total Income
</td> <td></td>
        <td className="myAlign">
          00.00
</td>
        <td colspan="2" >
          Empl PF Contribution
</td > <td></td>
        <td className="myAlign">
          00.00
</td>
      </tr >
      <tr>
        <td colspan="2">
          Aggr of Chapter "PF"
</td> <td></td>
        <td className="myAlign">
          00.00
</td><td colspan="4"></td>
      </tr >
      <tr>
        <td colspan="2">
          Total Income
</td> <td></td>
        <td className="myAlign">
          00.00
</td>
        <td colspan="4"></td>
      </tr >
      <tbody className="border-center">
        <tr>
          <th>
            Attend/ Absence
</th>
          <th>
            Days in Month
</th>
          <th>
            Days Paid
</th>
          <th>
            Days Not Paid
</th>
          <th>
            Leave Position
</th>
          <th>
            Privilege Leave
</th>
          <th>
            Sick Leave
</th>
          <th>
            Casual Leave
</th>
        </tr>
        <tr>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td>Yrly Open Balance</td>
          <td>0.0</td> <td>0.0</td>
          <td>0.0</td>
        </tr >
        <tr>
          <th >Current Month</th>
          <td >31.0</td>
          <td >31.0</td>
          <td >31.0</td>
          <td>Availed</td>
          <td>0.0</td> <td>0.0</td>
          <td>0.0</td>
        </tr >
        <tr>
          <td colspan="4"></td>
          <td>Closing Balance</td>
          <td>0.0</td> <td>0.0</td>
          <td>0.0</td>
        </tr >
        <tr>
          <td colspan="4"> &nbsp; </td>
          <td > </td>
          <td > </td>
          <td > </td>
          <td > </td>
        </tr >
        <tr>
          <td colspan="4"></td>
          <td>Company Pool Leave Balance</td>
          <td>1500</td>
          <td ></td>
          <td ></td>
        </tr >
      </tbody>
    </table >

  </div >

  )
}

export default payslip