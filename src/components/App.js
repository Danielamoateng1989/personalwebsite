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
import SignUp from './Signup'
import Signin from './Signin'
import EmailForm from './EmailForm'

function App() {
  return (
    <Router>
      {window.location.pathname !== "/signin" && window.location.pathname !== '/signup' ? (
          <Navbar />
      ) : null}
      
      <Sidebar />
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/send" element={<EmailForm />} />

      

      </Routes>
      {window.location.pathname !== "/signin" && window.location.pathname !== '/signup' ? (
          <Footer />
      ) : null}
      
      <Submenu />
    </Router>
  );
}

export default App;
