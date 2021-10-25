import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import PageItem from '../Components/PageItem';
import SearchBar from '../Components/SearchBar';
import Loading from '../Components/Loading';

const Venues = () => {
    const { isPageCondensed, fetchData, venuesData, setVenuesData, searchString, setSearchString } = useContext(Context);

    useEffect(() => {
        searchString ? fetchData('venues', searchString) : setVenuesData([]);
    }, [searchString])

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--small col fw'>
                <h1>&ndash; &nbsp; Venues &nbsp; &ndash;</h1>

                <SearchBar
                    state={searchString}
                    setState={setSearchString}
                />
            </div>

            <div className='Page__list row fw'>
                {
                    venuesData.length > 0 ?
                    venuesData.map((curr, index) => 
                        <PageItem
                            key={index}
                            fullData={curr} 
                            title={curr.name} 
                            dateTime='N/A'
                            location={`${curr.city}, ${curr.country}`} 
                            type='Venue' 
                            image={null}
                        />
                    ) :
                    (
                        searchString ?
                        <Loading/> :
                        <h2>(No Venues Found...)</h2> 
                    )
                }   
            </div>
        </div>
    )
}

export default Venues;