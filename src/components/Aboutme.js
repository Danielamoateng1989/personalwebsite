import React from 'react'
import CardImage from '../images/backgroundImage_ccexpress.png'


const Aboutme = () => {
    return (
        <div className="about_container">
          <div className="my_card">
            <img src={CardImage} alt="Logo" />
            <div className="my_cardInfo">
               <span className="my_name"></span>
            </div>
          </div>
        </div>
    )
}

export default Aboutme
