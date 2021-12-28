import { FaGithub, FaLinkedin } from 'react-icons/fa'

  import React from 'react'
  
  const SocialMedia = () => {
      return (
          <div className="social-container">
            <a href="https://www.linkedin.com/in/daniel-amoateng-959a27181" className="LinkedIn social">
            <FaLinkedin />
            </a>
            <a href="https://github.com/Danielamoateng1989"
            className="Github social">
            <FaGithub />
            </a>
          </div>
      )
  }
  
  export default SocialMedia
  