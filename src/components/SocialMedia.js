import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedIn,
  faGitHub,
  } from "@fortawesome/free-brands-svg-icons";


  import React from 'react'
  
  const SocialMedia = () => {
      return (
          <div className="social-container">
            <a href="https://www.twitter.com/jamesqquick" className="LinkedIn social">
            <FontAwesomeIcon icon={faLinkedIn} size="2x" />
            </a>
            <a href="https://www.instagram.com/learnbuildteach"
            className="Github social">
            <FontAwesomeIcon icon={faGitHub} size="2x" />
            </a>
          </div>
      )
  }
  
  export default SocialMedia
  