import React from 'react';
import SecondSectionRight from './SecondSectionRight';
import './SecondSection.css';

const SecondSection = (props) => {
    const paragraph = props.paragraphList.map(item => {
        return (
            <p>{item.paragraph}</p>
        )
    });

    return (
        <section className='main__section'>
            <div className='main-section-left'>
                <h1>{props.paragraphList.header}</h1>
                {paragraph}
            </div>
           <div className='main-section-right'>
                <SecondSectionRight
                    cubeFace={props.cubeFace} />
           </div>
        </section>
    )
}

export default SecondSection;