import React from 'react';
// import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Hi, I'm Danny.<br />
            Welcome to Dannyville
        
          </h1>
          <p>
            I'm a passionate developer with a love for learning new technologies. Browse around and enjoy the site.
          </p>
          <button className='btn'>Come Inside</button>
        </article>
        {/* <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article> */}
      </div>
    </section>
  );
};

export default Hero;
