import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const axios = require('axios');

const Form = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')
    const [isLoading, SetIsLoading] = useState('')


   const navigate = useNavigate()
   

    const handleSubmit = (e) => {
        e.preventDefault()
        SetIsLoading(true)

       
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

                {!isLoading && <button className="profile-card__button button--blue ">Send</button>}
                {/* {!isPending && <button disabled >Adding blog...</button>} */}
            </form>

        </div>
    )
}

export default Form
