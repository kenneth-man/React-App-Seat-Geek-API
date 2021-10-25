import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import SearchBar from '../Components/SearchBar';
import PageItem from '../Components/PageItem';
import Loading from '../Components/Loading';
import Pagination from '../Components/Pagination';

const Events = () => {
    const { isPageCondensed, fetchData, eventsData, setEventsData, formatDate, searchString, setSearchString, metaData } = useContext(Context);

    useEffect(() => {
        searchString ? fetchData('events', searchString) : setEventsData([]);
    }, [searchString])

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--small col fw'>
                <h1>&ndash; &nbsp; Search For An Event &nbsp; &ndash;</h1>

                <SearchBar
                    state={searchString}
                    setState={setSearchString}
                />
            </div>

            <div className='Page__list row fw'>
                {
                    eventsData.length > 0 ?
                    eventsData.map((curr, index) => 
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
                        searchString ?
                        <Loading/> :
                        <h2>(No Events Found...)</h2> 
                    )
                }
            </div>

            <Pagination
                eventType='events'
                query={searchString}
                date={false}
                data={eventsData}
                meta={metaData}
            />
        </div>
    )
}

export default Events;