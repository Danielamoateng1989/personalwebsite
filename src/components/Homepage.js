import React from 'react';
import ProfileImage from '../images/backgroundImage_ccexpress.png';
import { useGlobalContext } from './context';

const Homepage = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Hi! I'm Danny.<br />
             I'm a Software Engineer. Welcome to my world!
            </h1>
    
        
          
          <p>
          Organized, dedicated and ambitious professional with excellent attention to detail, and a love for learning new technologies.           </p>
          
        </article>
        <article className='hero-DanielImage'>
          <img src={ProfileImage} className='Daniel-img' alt='portrait'/>
        </article> 
      </div>
    </section>
  );
};

export default Homepage;
