import React from 'react'
import CardImage from '../images/backgroundImage_ccexpress.png'


const Aboutme = () => {
    return (
        <div className="about_container">
          <div className="my_card">
            <img src={CardImage} alt="Logo" />
            <div className="my_cardInfo">
                <span className="tag">Sexiest Man Alive</span>
               <span className="my_name">Daniel Amoateng</span>
               <div className="my_fullname"></div>
               <p>lorem ipsum dolor sit amet, consectetur</p>
               <button>Download Resume</button>
            </div>
            
          </div>
          
        </div>
    )
}

export default Aboutme
