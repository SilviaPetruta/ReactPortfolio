import React from 'react';
import './FourthSectionLeft.css';

const FourthSectionLeft = () => {
    return (
        <div className='main-section-left'>
           <h1>Get in touch</h1>
           <from action="mailto:silvia@mail.com" id="contactForm">
                <div id="email">
                    <input id="dr" type="text" required placeholder="Name"/>
                    <input id="st" type="email" required placeholder="Email"/>
                </div>
                <input type="text" required placeholder="Subject"/>
                <textarea name="" id="message" required cols="30" rows="30"  placeholder="Message"></textarea>
                <input type="submit"/>
           </from>   
        </div>
    )
}

export default FourthSectionLeft;