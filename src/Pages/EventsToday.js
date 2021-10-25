import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Context';
import PageItem from '../Components/PageItem';
import Loading from '../Components/Loading';

const EventsToday = () => {
    const { isPageCondensed, fetchData, eventsTodayData, formatDate, showNoDataMessage, fetchingEventsTodayData } = useContext(Context);
    const todayISODate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        fetchData('events', false, todayISODate);
        showNoDataMessage(eventsTodayData, 'eventsToday');
    }, []);

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--small col fw'>
                <h1>&ndash; &nbsp; Events Today &nbsp; &ndash;</h1>

                <h2>Browse All Events Happening Today</h2>
            </div>

            <div className='Page__list row fw'>
                {
                    eventsTodayData.length > 0 ?
                    eventsTodayData.map((curr, index) => 
                        <PageItem
                            key={index}
                            fullData={curr}
                            title={curr.title}
                            dateTime={formatDate(curr.datetime_utc)}
                            location={`${curr.venue.city}, ${curr.venue.country}`}
                            type={curr.type}
                            image={curr.performers[0].image}
                        />
                    ) :
                    (
                        fetchingEventsTodayData ?
                        <Loading/> :
                        <h2>(No Events happening today...)</h2>
                    )
                }
            </div>
        </div>
    )
}

export default EventsToday;