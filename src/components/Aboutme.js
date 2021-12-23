import React from 'react'
import CardImage from '../images/Danielimg.JPG'


const Aboutme = () => {
    return (
        <div className="container">
          <div className="my_card">
            <img className="myimg" src={CardImage} alt="Logo" />
            <div className="my_cardInfo">
                <br />
                <span className="tag">Sexiest Man Alive</span>
                <br></br>
               <span className="my_name">Daniel Amoateng</span>
                <br />
               <p>It is a long established fact that a 
                reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                 as opposed to using 'Content here, content here', making it look like readable English. 
                 Many desktop publishing packages and web page editors now.
        
</p>
               <button>Download Resume</button>
            </div>
            
          </div>
          
        </div>
    )
}

export default Aboutme
