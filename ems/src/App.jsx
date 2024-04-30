import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Layout from './components/layout';
import Add from "./components/add";
import Account from "./components/dashboard/account";
import Admin from "./components/dashboard/admin";
import Electrical from "./components/dashboard/electrical";
import Hr from "./components/dashboard/hr";
import Infra from "./components/dashboard/infra"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/add" element={<Add />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/electrical" element ={<Electrical />} />
          <Route path="/hr" element={<Hr />} />
          <Route path="/infra" element={<Infra />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
