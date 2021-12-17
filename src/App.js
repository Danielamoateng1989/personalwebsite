import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Submenu from '../src/components/Submenu';
import Aboutme from './components/Aboutme';
import Myinterest from './components/Myinterest';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Myinterest />
      <Footer />
      <Submenu />
    </>
  );
}

export default App;
