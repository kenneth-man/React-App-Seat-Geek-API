import React from 'react';
import loadingGif from '../Res/Images/loading.gif';

const Loading = () => {
    return (
        <div className='loading row'>
            <h1>Loading Data...</h1>

            <img src={loadingGif} alt='loading-gif'/>
        </div>
    )
}

export default Loading;