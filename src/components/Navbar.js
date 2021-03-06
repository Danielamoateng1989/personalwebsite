import React from 'react';
import logo from '../images/Danielslogo.png';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 3;
    const bottom = tempBtn.bottom - 2;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };


  const navigate = useNavigate();
  const sendMessage = () => navigate('/sendmessage');
  
  
  
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to="/">
          <img src={logo} className='navigation-logo' alt='danny' />
          </Link>
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
         <button className='login-btn' onClick={sendMessage}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
