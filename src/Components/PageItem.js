import React, { useContext } from 'react';
import { Context } from '../Context'; 
import seatGeekLogo from '../Res/Images/seat-geek-logo.png';
import { Link } from 'react-router-dom';
import crossIcon from '../Res/Icons/cross.svg';

const PageItem = ({ fullData, title, dateTime, location, type, image, onFavouritesPage = false }) => {
    const { setDetailsData, formatSlug, favouritesData, setFavouritesData } = useContext(Context);

    const pageItemOnClick = () => setDetailsData(fullData);

    const removeFromFavouritesOnClick = () => setFavouritesData(favouritesData.filter(curr => curr.id !== fullData.id));

    const toggleModalOnHover = () => document.querySelector(`#modal-${fullData.id}`).classList.toggle('hidden');
    
    return (
        <Link 
            to={onFavouritesPage ? '/Favourites' : `/Details/${formatSlug(title)}`} 
            exact='true' 
            className='link clear' 
            onClick={onFavouritesPage ? removeFromFavouritesOnClick : pageItemOnClick}
            onMouseOver={onFavouritesPage ? toggleModalOnHover : null}
            onMouseOut={onFavouritesPage ? toggleModalOnHover : null}> 
                <div className='Page__item col' style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image ? image : seatGeekLogo})`}}>
                    <h1>{title}</h1>
                    <h2>Location: {location}</h2>
                    <h2>Date: {dateTime}</h2>
                    <h3>Type: {type}</h3>

                    <div className='Page__item--modal row fw fh hidden' id={`modal-${fullData.id}`}>
                        <img src={crossIcon} alt='cross-icon'/>

                        <h1>Remove from favourites?</h1>
                    </div>
                </div>
        </Link>
    )
}

export default PageItem;