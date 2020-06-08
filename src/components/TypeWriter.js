import React from 'react';
import './TypeWriter.css';

const TypeWriter = (props) => {
    return (
        <div className='typeWriter'>
            <p>{props.name}</p>
        </div>
    )
}

export default TypeWriter;