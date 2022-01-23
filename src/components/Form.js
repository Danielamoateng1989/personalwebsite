import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// const axios = require('axios');


const Form = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')
    const navigate = useNavigate();
    const thankyou = () => navigate('/thankyou');

    
    const handleSubmit = (e) => {
        e.preventDefault()
    
    }
    return (
        <div className="">
        <div className="send-message">
            <h3>contact</h3>
            <form onSubmit={handleSubmit} className="section-form">
                <label>name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => SetName(e.target.value)}    
                />
                <label>Email</label>
                <input
                    required
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}   
                    
                />
                <label>Message</label>
                <textarea
                    value={message}
                    onChange={(e) => SetMessage(e.target.value)}    
                />
                <button className="profile-card__button button--blue" type="submit" onClick={thankyou}>Send</button>
            </form>

            
        </div>
        </div>
    )
}

export default Form
