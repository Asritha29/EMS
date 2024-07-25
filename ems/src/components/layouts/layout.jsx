import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../partials/header';
import Sidebar from '../partials/sidebar';
import '../../App.css'
function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="contant">
        <main>
          <Outlet />
        </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;