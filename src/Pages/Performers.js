import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import SearchBar from '../Components/SearchBar';
import PageItem from '../Components/PageItem';
import Loading from '../Components/Loading';

const Performers = () => {
    const { isPageCondensed, fetchData, performersData, setPerformersData, searchString, setSearchString } = useContext(Context);

    useEffect(() => {
        searchString ? fetchData('performers', searchString) : setPerformersData([]);
    }, [searchString])

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--small col fw'>
                <h1>&ndash; &nbsp; Performers &nbsp; &ndash;</h1>

                <SearchBar
                    state={searchString}
                    setState={setSearchString}
                />
            </div>

            <div className='Page__list row fw'>
                {
                    performersData.length > 0 ?
                    performersData.map((curr, index) => 
                        <PageItem
                            key={index}
                            fullData={curr}
                            title={curr.name}
                            dateTime='N/A'
                            location='N/A'
                            type={curr.type}
                            image={curr.image}
                        />
                    ) :
                    (
                        searchString ?
                        <Loading/> :
                        <h2>(No Performers found...)</h2>
                    )
                }
            </div>
        </div>
    )
}

export default Performers;