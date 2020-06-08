import React from 'react';
import './SecondSectionRight.css';

const SecondSectionRight = (props) => {
    const cubeFaceDiv = props.cubeFace.map(item => {
        return (
            <div className={`cube__face ${item.faceClass}`}>
                {item.skill}
            </div>
        )
    });

    return (
        <div className='scene'>
            <div className='cube'>
                {cubeFaceDiv}
            </div>
        </div>
    )
}

export default SecondSectionRight;