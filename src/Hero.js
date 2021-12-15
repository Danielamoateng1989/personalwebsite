import React from 'react';
import ProfileImage from '../src/images/backgroundImage_ccexpress.png';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Hi! I'm Danny.<br />
            Welcome to <br />
            my world! Let's connect.
        
          </h1>
          <p style={{"font-family": 'Lato' }}>
            I'm a passionate developer with a love for learning new technologies. Browse around and enjoy the site.
          </p>
          <button className='btn'>Explore</button>
        </article>
        <article className='hero-DanielImage'>
          <img src={ProfileImage} className='Daniel-img' alt='portrait' />
        </article>
      
      </div>
    </section>
  );
};

export default Hero;
