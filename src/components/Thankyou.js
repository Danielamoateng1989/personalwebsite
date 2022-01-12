import React from 'react'
import {useNavigate}from 'react-router-dom'

const Thankyou = () => {

    const navigate = useNavigate();
    const goHome = () => navigate('/');



    return (
        
            <div>
                <div className="content">
                    <div className="wrapper-1">
                        <div className="wrapper-2">
                            <h2>Thank you!</h2>
                            <p>Thanks for connecting with me </p>
                            <p>I will get back to you as soon as possible</p>
                        <ul>
                        <li>
                            <button className='go-home' onClick={goHome}>
                               go home
                            </button>
                        </li>
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Thankyou
