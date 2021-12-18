import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from './Navbar';
import Homepage from './Homepage';
import Submenu from './Submenu';
import Footer from './Footer';
import Sidebar from './Sidebar';


function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Homepage />
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
