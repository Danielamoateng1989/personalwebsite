import React, {useState} from 'react'


const Readmore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadmore] = useState(true);
    
    const toggleReadmore = () => {
        setIsReadmore(!isReadMore);
    }


    return (
        <div className="read">
           {isReadMore ? text.slice(0, 201) : text}
      <span onClick={toggleReadmore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
        </div>
    )
}

export default Readmore
