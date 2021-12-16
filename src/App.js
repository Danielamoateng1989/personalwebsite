import React from 'react';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Submenu from '../src/components/Submenu';
import Aboutme from './components/Aboutme';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Submenu />
    </>
  );
}

export default App;
