import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/partials/header';
import Sidebar from '../components/partials/sidebar';

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;