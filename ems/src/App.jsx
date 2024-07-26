//import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import User from "./user/user"
//import UserElement from "./components/middleware/user"
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Dashboard from "./components/dashboard";
import Layout from './components/layouts/layout';
import Add from "./components/add";
import Account from "./components/tables/account";
import Admin from "./components/tables/admin";
import Electrical from "./components/tables/electrical";
import Hr from "./components/tables/hr";
import Infra from "./components/tables/infra";
import IT from "./components/tables/it";
import Scanning from "./components/tables/scanning";
import Telecom from "./components/tables/telecom";
import Apply from "./components/leave/apply";
import Request from "./components/leave/requste";
import Tracking from "./components/leave/tracking";
import Payslip from "./components/payslip";
import Attendance from "./components/leave/attendance";
import Empoloyee from "./components/employee";
import  UserLayout from "./components/layouts/userlayout";


// import './App.css';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/"  element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/add" element={<Add />} />
            <Route path="/employee" element={<Empoloyee />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/hr" element={<Hr />} />
            <Route path="/infra" element={<Infra />} />
            <Route path="/it" element={<IT />} />
            <Route path="/scanning" element={<Scanning />} />
            <Route path="/telecom" element={<Telecom />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/request" element={<Request />} />
            <Route path="/tracking" element={<Tracking />} />
            {/* <Route path="/user" element={<User />} />  */}
            <Route path="/payslip" element={<Payslip />} />
            <Route path="/attendance" element={<Attendance />} />
          </Route>
            <Route path="/user" element={<UserLayout />}>

            </Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
