import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/auth/login';
import Dashboard from './components/dashboard';
import Layout from './components/layouts/layout';
import Add from './components/add';
import Attendance from './components/leave/attendance';
import Employee from './components/employee';
import UserLayout from './components/layouts/userlayout';
import Upload from './components/upload';
import { AuthProvider } from './components/auth/authcontext';
import PrivateRoute from './components/auth/auth'; // Ensure the path is correct
import UserPayslip from './components/user/payslip';

const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<PrivateRoute element={Dashboard} roles={['Admin', 'Hr']} />} />
              <Route path="add" element={<PrivateRoute element={Add} roles={['Admin', 'Hr']} />} />
              <Route path="employee" element={<PrivateRoute element={Employee} roles={['Admin', 'Hr']} />} />
              <Route path="upload" element={<PrivateRoute element={Upload} roles={['Admin', 'Hr']} />} />
              <Route path="attendance" element={<PrivateRoute element={Attendance} roles={['Admin', 'Hr']} />} />
            </Route>
            <Route path="/user" element={<UserLayout />}>
              <Route path="payslip" element={<PrivateRoute element={UserPayslip} roles={['User']} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default App;
