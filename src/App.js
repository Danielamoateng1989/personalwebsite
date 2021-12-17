import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Submenu from '../src/components/Submenu';
import Aboutme from './components/Aboutme';
import Myinterest from './components/Myinterest';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Aboutme />
      <Myinterest />
      <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
