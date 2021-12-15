import {FaUserTie,
       FaFutbol, FaFileCode, 
       FaCalendar, 
       FaShoppingCart,
       FaAirbnb, FaLinkedin,
      FaGithub} from 'react-icons/fa';


import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { label: 'About Me', icon: <FaUserTie />, url: '/aboutme' },
      { label: 'My Interest', icon: <FaFileCode />, url: '/myinterest' },
      { label: 'My Hobbies', icon: <FaFutbol />, url: '/myhobbies' },
    ],
  },
  {
    page: 'Portfolio',
    links: [
      { label: 'Founded', icon: <FaCalendar/>, url: '/founded' },
      { label: 'Shopping', icon: <FaShoppingCart />, url: '/shopping' },
      { label: 'Travel', icon: <FaAirbnb />, url: '/about' },
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
