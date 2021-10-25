import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import PageItem from './PageItem';
import Loading from './Loading';

const Recommendations = ({ ID }) => {
    const { userLat, userLng, fetchRecommendationsData, recommendationsData, formatDate } = useContext(Context);

    useEffect(() => {
        if(userLat && userLng) fetchRecommendationsData(userLat, userLng, ID);
    }, [userLat, userLng])

    return (
        <div className='recommendations Page__list row fw'>
            {
                recommendationsData.length > 0 ?
                recommendationsData.map((curr, index) => 
                    <PageItem
                        key={index}
                        fullData={curr.event}
                        title={curr.event.title}
                        dateTime={formatDate(curr.event.datetime_utc)}
                        location={`${curr.event.venue.city}, ${curr.event.venue.country}`}
                        type={curr.event.type}
                        image={curr.event.performers[0].image}
                    />
                ) : 
                <h1>(No recommendations to be found...)</h1>
            }
        </div>
    )
}

export default Recommendations;