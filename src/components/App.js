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
import Home from '../pages/home'


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path='/aboutme' element={<Home />} />
      </Routes>
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
