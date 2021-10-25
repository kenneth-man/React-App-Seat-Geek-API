import React, { useContext } from 'react';
import { Context } from '../Context'; 
import Loading from '../Components/Loading';
import Recommendations from '../Components/Recommendations';
import seatGeekBackground from '../Res/Images/seat-geek-background.png';
import { ReactComponent as SmileIcon } from '../Res/Icons/smile-o.svg';
import { ReactComponent as TickIcon } from '../Res/Icons/check.svg';

const Details = () => {
    const { isPageCondensed, detailsData, formatDate, favouritesData, setFavouritesData } = useContext(Context);

    const addToFavouritesOnClick = () => favouritesData.find(curr => curr.id === detailsData.id) ? alert('Item already exists in Favourites') : setFavouritesData([...favouritesData, detailsData]);

    return (
        <div className={isPageCondensed ? 'Page Page__condensed details center fh' : 'Page details center fh'} 
            style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(${detailsData.image ? detailsData.image : (detailsData.performers ? detailsData.performers[0].image : seatGeekBackground)})`}}>
            {
                Object.keys(detailsData).length > 0 ? 
                <div className='details__wrapper col fw fh'>
                    <div className='Page__section--small col fw'>
                        <h1>{detailsData.name ? detailsData.name : detailsData.title}</h1>

                        <div className='row' style={{width: '50%'}}>
                            <div className='details__wrapper--cont center'>
                                <h2>Date: {detailsData.datetime__utc ? formatDate(detailsData.datetime__utc) : 'N/A'}</h2>
                            </div>

                            <div className='details__wrapper--cont center'>
                                <h2>Score: {detailsData.score ? detailsData.score : 'N/A'}</h2>
                            </div>

                            <div className='details__wrapper--cont center'>
                                <h2>Popularity: {detailsData.popularity ? detailsData.popularity : 'N/A'}</h2>
                            </div>
                        </div>
                    </div>

                    <p>{detailsData.description}</p>

                    {
                        detailsData.venue ?
                        <div className='Page__section--medium col fw'>
                            <h1>Venue: {detailsData.venue.name}, {detailsData.venue.address}, {detailsData.venue.city} {detailsData.venue.country}</h1>

                            <h2>Up to <span>{detailsData.venue.capacity}</span> seating capacity</h2>

                            <h2><span>{detailsData.venue.num_upcoming_events}</span> Upcoming events</h2>

                            <h2>Visit <span>{detailsData.venue.url}</span> for more details</h2>
                        </div> :
                        null
                    }

                    <div className='Page__section--small center fw'>
                        <button className='details__addFav row' onClick={addToFavouritesOnClick}>
                            {
                                favouritesData.find(curr => curr.id === detailsData.id) ? 'Added to favourites' : 'Add to favourites'
                            }

                            {
                                favouritesData.find(curr => curr.id === detailsData.id) ?
                                <TickIcon/> :
                                <SmileIcon/>
                            }
                        </button>
                    </div>

                    <div className='Page__section--xlarge col fw'>
                        <h1>&ndash; &nbsp; Recommendations &nbsp; &ndash;</h1>
                        <Recommendations ID={detailsData.id}/>
                    </div>
                </div> :
                <Loading/>
            }
        </div>
    )
}

export default Details;