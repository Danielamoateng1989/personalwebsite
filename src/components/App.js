import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './Navbar';
import Homepage from '../pages/Homepage';
import Submenu from './Submenu';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Aboutme from './Aboutme'
import SignUp from '../pages/Signup'
import Signin from '../pages/Signin'
import EmailForm from './EmailForm'




function App({location }) {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/send" element={<EmailForm />} />
      </Routes>
        <Footer />
      <Submenu />
    </Router>
  );
}

export default App;
