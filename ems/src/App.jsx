import { useState } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Layout from './components/layout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
