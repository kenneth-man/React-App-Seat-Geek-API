import React from 'react';

const HomeSection = ({ title, image}) => {
    return (
        <div className='row'>
            <img src={image} alt='home-section-img'/>
            &nbsp;&nbsp;
            <h1>{title}</h1>
        </div>
    )
}

export default HomeSection;