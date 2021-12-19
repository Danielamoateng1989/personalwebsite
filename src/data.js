import {FaUserTie,
        FaFileCode, 
       FaCalendar, 
       FaShoppingCart,
       FaAirbnb, FaLinkedin,
       FaGithub,
       FaCalculator, FaHome} from 'react-icons/fa';


import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { label: 'Home', icon: <FaHome />,url: '/' },
      { label: 'About Me', icon: <FaUserTie />,url: '/aboutme' },
      { label: 'My Interest', icon: <FaFileCode />,url: '/myinterest' },
    ],
  },
  {
    page: 'Projects',
    links: [
      { label: 'Founded', icon: <FaCalendar/>,url: '/founded' },
      { label: 'Shopping', icon: <FaShoppingCart />,url: '/shopping' },
      { label: 'Travel', icon: <FaAirbnb />,url: '/travel' },
      { label: 'RP Calculator', icon: <FaCalculator />,url: '/calculator' },
    ],
  },
  {
    page: 'Connect',
    links: [
      { label: 'linkedIn', icon: <FaLinkedin />,url: 'https://www.linkedin.com/in/daniel-amoateng-959a27181' },
      { label: 'github', icon: <FaGithub/>,url: 'https://github.com/Danielamoateng1989' },
    ],
  },
];

export default sublinks;
