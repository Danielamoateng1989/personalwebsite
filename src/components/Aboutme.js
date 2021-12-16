import React from 'react'
import ProfileImage from '../images/backgroundImage_ccexpress.png';


const Aboutme = () => {
    return (
    <section className='about-me'>
      <div className='hero-center'>
        
            <article className='hero-DanielImage'>
          <img src={ProfileImage} className='Daniel-img' alt='Danielspicture' />
        
        </article> 
        <article className='hero-info'>
            <h3>About Me</h3>
            <div className='about-paragraph'>
            <p>
            Organized, dedicated and ambitious professional with excellent attention to detail, and a love for learning new technologies.  
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <p>
            It has roots in a piece of classical Latin literature from 45 BC, 
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
            </p>
            <p>
            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            </p>
            </div>
        </article>  
      </div>
    </section>
    )
}

export default Aboutme
