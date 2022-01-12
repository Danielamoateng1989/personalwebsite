import React from 'react'

const Footer = () => {


  const year = new Date().getFullYear()
    return (

<div class="footer">
  <p>  &copy;{year} Daniel Amoateng</p>
</div>
    
    )
}

export default Footer
