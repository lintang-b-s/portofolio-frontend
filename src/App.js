import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';
import ScrollToTop from './components/ScrollToTop.js';
import AppHeader from './components/shared/AppHeader';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import  ProjectsListPage  from './components/projects/ProjectsGrid'
import AppFooter from './components/shared/AppFooter';

function App() {
  return (
  //  error ada di 
      <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Router>
          <ScrollToTop />
          <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/project/:id" element={<ProjectsListPage />} /> */}

          </Routes>




          <AppFooter />
        </Router>





      </div>


   
  );
}

export default App;
