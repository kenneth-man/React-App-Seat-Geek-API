import React from 'react';

const Banner = ({ image }) => {
    return (
        <div className='banner fw' style={{backgroundImage: `url(${image})`}}/>
    )
}

export default Banner;