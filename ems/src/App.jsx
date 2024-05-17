import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Layout from './components/layout';
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
import { AuthContext } from './components/middleware/auth';
import './App.css';

const PrivateRoute = ({ element: Element, roles, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      element={
        user && roles.includes(user.role) ? (
          <Element />
        ) : (
          <Navigate to="/login" />
        )
      }
    />                                        
  );
};


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <PrivateRoute path="/" roles={['admin', 'user', 'hr']} element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/add" element={<Add />} />
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
          </PrivateRoute>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
