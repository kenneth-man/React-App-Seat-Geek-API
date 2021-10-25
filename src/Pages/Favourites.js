import React, { useContext } from 'react';
import { Context } from '../Context';
import PageItem from '../Components/PageItem';

const Favourites = () => {
    const { isPageCondensed, favouritesData, formatDate } = useContext(Context);

    return (
        <div className={isPageCondensed ? 'Page Page__condensed Page__list favourites row fh' : 'Page Page__list favourites row fh'}>
            {
                favouritesData.length > 0 ?
                favouritesData.map((curr, index) => 
                    <PageItem
                        key={index}
                        fullData={curr}
                        title={curr.title ? curr.title : curr.name}
                        dateTime={curr.datetime_utc ? formatDate(curr.datetime_utc) : 'N/A'}
                        location={curr.venue.city && curr.venue.country ? `${curr.venue.city}, ${curr.venue.country}` : 'N/A'}
                        type={curr.type}
                        image={curr.image ? curr.image : (curr.performers ? curr.performers[0].image : null)}
                        onFavouritesPage={true}
                    />  
                ) :
                <h1 style={{margin: 'auto'}}>No items in Favourites</h1>
            }
        </div>
    )
}

export default Favourites;