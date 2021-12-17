import {FaUserTie,
        FaFileCode, 
       FaCalendar, 
       FaShoppingCart,
       FaAirbnb, FaLinkedin,
       FaGithub,
       FaCalculator} from 'react-icons/fa';


import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { label: 'About Me', icon: <FaUserTie />, url: '/aboutme' },
      { label: 'My Interest', icon: <FaFileCode />, url: '/myinterest' },
    ],
  },
  {
    page: 'Portfolio',
    links: [
      { label: 'Founded', icon: <FaCalendar/>, url: '/founded' },
      { label: 'Shopping', icon: <FaShoppingCart />, url: '/shopping' },
      { label: 'Travel', icon: <FaAirbnb />, url: '/travel' },
      { label: 'RP Calculator', icon: <FaCalculator />, url: '/travel' },
    ],
  },
  {
    page: 'Connect',
    links: [
      { label: 'linkedIn', icon: <FaLinkedin />, url: '/linkedinlink' },
      { label: 'github', icon: <FaGithub/>, url: '/About' },
    ],
  },
];

export default sublinks;
