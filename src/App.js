import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import ScrollToTop from './components/ScrollToTop.js';
import AppHeader from './components/shared/AppHeader.js';
import Home from './pages/Home.js';
import AppFooter from './components/shared/AppFooter.js';

import Project from './pages/Project.js'
import AdminLoginPage from "./pages/AdminLoginPage.js";
import SidebarProfile from "./pages/Dashboard.js"
import ProjectList from "./pages/ProjectListPage.js"
import ProjectEditPage from "./pages/ProjectEditPage.js"
import OrganizationListAdmin from "./pages/Organizations/OrganizationsListPage.js"
import OrganizationEditPage from "./pages/Organizations/OrganizationEditPage.js"


function App
() {
  return (
  //  error ada di 
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="/admin" element={<AdminLoginPage />} />
              <Route path="/admin/sidebarProfiles" element={<SidebarProfile/>} />
              <Route path="/admin/projects" element={<ProjectList />} />
              <Route path="/admin/projects/:id/edit" element={<ProjectEditPage />} />
              <Route path="/admin/organizations" element={<OrganizationListAdmin />} />
              <Route path="/admin/organizations/:id/edit" element={<OrganizationEditPage />} />

          </Routes>




          <AppFooter />
        </Router>





      </div>


   
  );
}

export default App;
