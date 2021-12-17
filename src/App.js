import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from '../src/components/Navbar';
import Homepage from './components/Homepage';
import Submenu from '../src/components/Submenu';
import Aboutme from './components/Aboutme';
import Myinterest from './components/Myinterest';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Homepage />
      <Aboutme />
      <Myinterest />
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
