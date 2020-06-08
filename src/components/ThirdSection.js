import React from 'react';
import './ThirdSection.css';

const ThirdSection = (props) => {
    const thirdSectionDiv = props.thirdSection.map(item => {
        return (
            <div className='loading'>
                {item.icon}
                <div className='progress-bar'>
                    <div className='progress'></div>
                </div>
                <div className='percent'>{item.percent}</div>
            </div>
        )
    });

    return (
        <section className='main__section'>
            <div className='main-section-left'>
                <h1>{props.thirdSection.header}</h1>
            </div>
            <div className='main-section-right'>
                {thirdSectionDiv}
            </div>
        </section>
    )
}

export default ThirdSection;