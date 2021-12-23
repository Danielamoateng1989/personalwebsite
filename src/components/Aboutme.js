import React from 'react'
import CardImage from '../images/Danielimg.JPG'


const Aboutme = () => {
    return (
      

      <div className="card card-paragraph">
          <div className="grid grid--1x2">
              <img className="card-image" src={CardImage} alt="Daniel" />
              <div className="paragraph">
                  <h3>About</h3>
                  <p>There are many variations of passages of Lorem Ipsum available,
                       but the majority have suffered alteration in some form, by injected humour, or 
                       randomised words which don't look even slightly believable. 
                       If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
                       hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined 
                       chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 
                       200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which 
                       looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, 
                       or non-characteristic words etc.
                  </p>
                  <button className="btn-readmore"type="button">Read more</button>
              </div>
          </div>

      </div>
    
    
    
    )
}

export default Aboutme
