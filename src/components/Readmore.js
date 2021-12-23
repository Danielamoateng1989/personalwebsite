import React, {useState} from 'react'


const Readmore = ({ children }) => {
    const text = children;
    const [isReadmore, setIsReadmore] = useState(true);
    
    const toggleReadmore = () => {
        setIsReadmore(!isReadmore);
    }


    return (
        <div>
            
        </div>
    )
}

export default Readmore
