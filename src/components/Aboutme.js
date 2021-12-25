import React from 'react'
import CardImage from '../images/Danielimg.JPG'
import Readmore from '../components/Readmore'


const Aboutme = () => {
    return (
      <div className=" card card-paragraph">
          <div className="grid grid--1x2">
              <img className="card-image" src={CardImage} alt="Daniel" />
              <div className="paragraph">
                  <h2>About Me</h2>
                  <br />
                  <Readmore>
                       Hi there, I'm Daniel, a Software Engineer based in Auburn, Massachusetts. I have lived in Auburn for 5 years now, 
                       and oh I love it here. It's awesome here!
                       <br />
                       Quick:
                       So I don't have a TV and my friends think it's wierd. I kind of disagree. They think I don't do anything
                       fun. Well, it will come as a shock when they find out that I enjoy problem solving, and I watch sports. That is it.  I think those are fun, at least to me.
                       So, yeah. But let me know if you want to connect and do some problem solving with me. Cheers!
                 </Readmore>
                  
              </div>
          </div>

      </div>
    
    
    
    )
}

export default Aboutme
