import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'about me',
    links: [
      { label: 'interest', icon: <FaCreditCard />, url: '/products' },
      { label: 'hobbies', icon: <FaCreditCard />, url: '/products' },
      { label: 'what i read', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'portfolio',
    links: [
      { label: 'project one', icon: <FaBook />, url: '/products' },
      { label: 'project two', icon: <FaBook />, url: '/products' },
      
    ],
  },
  {
    page: 'contact me',
    links: [
      { label: 'letslink', icon: <FaBriefcase />, url: '/products' },
      { label: 'profiles', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;