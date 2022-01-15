import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const axios = require('axios');

const Form = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')
    const navigate = useNavigate();
    const thankyou = () => navigate('/thankyou');
    
    const handleSubmit = (e) => {
        e.preventDefault()


       


        axios({
            method: "POST",
            url: "/send",
            data: JSON.stringify(message)
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                navigate('/thankyou')
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    return (
        <div className="send_message_card">
        <div className="send-message">
            <h3>contact</h3>
            <form onSubmit={handleSubmit}>
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
                <button className="profile-card__button button--blue " onClick={thankyou}>Send</button>
            </form>
        </div>
        </div>
    )
}

export default Form
