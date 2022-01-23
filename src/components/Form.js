import React from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const axios = require('axios');


const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    // const navigate = useNavigate();
    // const thankyou = () => navigate('/thankyou');

    
    const handleSubmit = (e) => {
        e.preventDefault()
  
    
    }
    return (
        <div className="">
        <div className="send-message" onClick={handleSubmit}>
            <h3>contact</h3>
            <form className="section-form">
                <label>name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)} 
                    
                />
                <label>Email</label>
                <input
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}   
                    
                />
                <label>Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}    
                />            
                <button className="profile-card__button button--blue" type="submit">Send</button>

                </form>


        </div>
        </div>
    )
}

export default Form
