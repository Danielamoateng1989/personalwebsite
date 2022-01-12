import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './Navbar';
import Homepage from './Homepage';
import Submenu from './Submenu';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Aboutme from './Aboutme'

import EmailForm from './EmailForm'

function App() {
  return (
    <Router>
          <Navbar />
  
      
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/contact" element={<Aboutme />} />
          <Route path="/sendmessage" element={<EmailForm />} />

      

      </Routes>
          <Footer />
     
      
      <Submenu />
    </Router>
  );
}

export default App;
