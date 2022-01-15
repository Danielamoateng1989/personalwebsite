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
            Hello, I'm Danny 
            <br /> <span style={{ color: '#2555FE'}}>Software Engineer</span>
            <br />
            Welcome to my world!<br />
            </h1>
           <p>
            Hi, I'm Daniel Amoateng. Software Engineer from Auburn, MA. I enjoy learning new technologies and solving problems. I love watching sports, hanging out with my friends 
            and meeting new people. 
           </p>   
        </article>
        <article className='hero-DanielImage'>
          <img src={ProfileImage} className='Daniel-img' alt='portrait'/>
        </article> 
      </div>

    </section>
    
  );
};

export default Homepage;
