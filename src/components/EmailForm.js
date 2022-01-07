import React, {useRef}  from "react";
import emailjs from '@emailjs/browser';




const EmailForm = () => {


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_88m114a', 'template_8m3r2ar', form.current, 'user_EtXUxAT6sSN9AautlPk69')
      .then((result) => {
         console.log(result.text)
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <form ref={form} onSubmit={sendEmail}>
       <h1 className="connect">Let's connect!</h1>
      
        <div className="half left cf">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" id="input-email" placeholder="Email address" required />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message" defaultValue={""} required/>
        </div>  
      <button className="button1" type="submit" value="Send" onClick={sendEmail}>Send a Message</button>
    </form>
  
    
  );
};


export default EmailForm