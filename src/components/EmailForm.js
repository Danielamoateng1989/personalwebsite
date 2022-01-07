import React, {useRef}  from "react";
import emailjs from '@emailjs/browser';
require('dotenv').config()



const EmailForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_88m114a', 'template_8m3r2ar', form.current, 'user_EtXUxAT6sSN9AautlPk69')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

 
    <div className="wrapper">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
     
    </div>
  );
};


export default EmailForm