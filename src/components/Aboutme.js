import React from 'react'
import CardImage from '../images/Danielimg.JPG'
import Readmore from '../components/Readmore'


const Aboutme = () => {
    return (
      <div className=" card card-paragraph">
          <div className="grid grid--1x2">
              <img className="card-image" src={CardImage} alt="Daniel" />
              <div className="paragraph">
                  <h3>About</h3>
                  <Readmore>
                       There are many variations of passages of Lorem Ipsum available,
                       but the majority have suffered alteration in some form, by injected humour, or 
                       randomised words which don't look even slightly believable. Add more text here for more
                       the mean time.
                       
                        There are many variations of passages of Lorem Ipsum available,
                       but the majority have suffered alteration in some form, by injected humour, or 
                       randomised words which don't look even slightly believable. Add more text here for more
                       the mean time.
             </Readmore>
                  
              </div>
          </div>

      </div>
    
    
    
    )
}

export default Aboutme
