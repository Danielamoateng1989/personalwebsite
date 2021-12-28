import React from 'react';
import logo from '../images/Danielslogo.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };


  const openLoginForm = (e) => {
    console.log("hello");

  }

  
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='navigation-logo' alt='danny' />
          <button className='header-btn toggle-btn' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              About
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Projects
            </button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>
              Social
            </button>
          </li>
        </ul>
         <button className='login-btn' onClick={openLoginForm}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
