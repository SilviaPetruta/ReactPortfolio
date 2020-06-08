import React from 'react';
import FourthSectionLeft from './FourthSectionLeft';
import './FourthSection.css';

const FourthSection = () => {
    return (
        <section className='main__section'>
           <FourthSectionLeft /> 
           <div class="main-section-right">
                <div id="mapContainer"></div>
            </div>
        </section>
    )
}

export default FourthSection;