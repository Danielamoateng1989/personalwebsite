import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [name, SetName] = useState('')
    const [email, SetEmail] = useState('')
    const [message, SetMessage] = useState('')
    const [isLoading, SetIsLoading] = useState('')


   const navigate = useNavigate()
   

    const handleSubmit = (e) => {
        e.preventDefault()


        SetIsLoading(true)

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: []
        }).then(() => {
            console.log('Blog saved')
            SetIsLoading(false)
            //After the user is done submitting the form, let's have them go back
            navigate('/about')
        })
    }

    return (
        <div className="send-message">
            <h1>Send me a message</h1>
            <form onSubmit={handleSubmit}>

                <label>name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => SetName(e.target.value)}
                    placeholder="name"
                />


                <label>Email</label>
                <input
                    required
                    value={email}
                    onChange={(e) => SetEmail(e.target.value)}
                    placeholder="email"
                />



                <label>Message</label>
                <textarea
                    value={message}
                    onChange={(e) => SetMessage(e.target.value)}
                    placeholder="message"
                
                  
                />

                {!isLoading && <button className="button">Send</button>}
                {/* {!isPending && <button disabled >Adding blog...</button>} */}
            </form>

        </div>
    )
}

export default Form
