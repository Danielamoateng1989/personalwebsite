import React from 'react'
import CardImage from '../images/Danielimg.JPG'
import SocialMedia from './SocialMedia'



const Aboutme = () => {
    return (
      <div className=" card card-paragraph">
          <div className="grid grid--1x2">
              <article className="social-media">
              <img className="card-image" src={CardImage} alt="Daniel" />
              <div className="socialMedia">
              <SocialMedia />
              </div>
              </article>
              <div className="paragraph">
                   
                  <h4 className="aboutMe">About Me</h4>
                  <br />
                      <p className="para p1">
                       Hi there, I'm Daniel, a Software Engineer based in Auburn, Massachusetts. I have lived in Auburn for 5 years now, 
                       and oh I love it here. It's awesome here!
                       </p>
                       <p>
                      <p className="para">
                       <h4>Quick Story:</h4>
                       </p>
                       <p className="para">
                       So one day in July of 2016, I needed a haircut but I really wasn't interested in going to the barbershop on that day. So I thought, hmm, If I dont want to go to the barbershop, maybe I can look up some barbers in my area who might be interested in offering home service appointments for extra charge. Checked the AppStore, nothing. So I created that app so I could get a haircut at home.
                       </p>
                       

                       </p>
                 
                  
              </div>
          </div>

      </div>
    
    
    
    )
}

export default Aboutme
