import React from 'react'
import cardImage from '../images/Danielimg.JPG'
import {GoLocation } from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Aboutme = () => { 
  const navigate = useNavigate();
  const sendMessage = () => navigate('/sendmessage');
    return (    
    <div>
        <div className="wrapper">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img src={cardImage} alt="profile card" />
            </div>
            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">Daniel Amoateng</div>
              <div className="profile-card__txt">Software Engineer from <strong>Auburn</strong></div>
              <div className="profile-card-loc">
                <span className="profile-card-loc__icon">
                  <GoLocation />
                </span>
                <span className="profile-card-loc__txt">
                  Auburn, MA
                </span>
              </div>      
              <div className="profile-card-social">
                <a href="https://github.com/Danielamoateng1989" className="profile-card-social__item github " target="">
                  <span className="icon-font">
                    <FaGithub />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/daniel-amoateng-959a27181/" className="profile-card-social__item linkedin" target="">
                  <span className="icon-font">
                    <FaLinkedin />
                  </span>
                </a>
              </div>
              <div className="profile-card-ctr">
                <button className="profile-card__button button--blue js-message-btn" onClick={sendMessage}>Let's connect</button>
              </div>
            </div>
          </div>
         </div>
        <div>
      </div>
    </div>
    );
  }

    
 

export default Aboutme
