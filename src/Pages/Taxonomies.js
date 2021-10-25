import React, { useContext, useEffect } from 'react';
import { Context } from '../Context';
import PageItem from '../Components/PageItem';
import Loading from '../Components/Loading';

const Taxonomies = () => {
    const { isPageCondensed, fetchData, taxonomiesData, showNoDataMessage, fetchingTaxonomiesData } = useContext(Context);

    useEffect(() => {
        fetchData('taxonomies');
        showNoDataMessage(taxonomiesData, 'taxonomies');
    }, [])

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--small col fw'>
                <h1>&ndash; &nbsp; Taxonomies &nbsp; &ndash;</h1>

                <h2>Browse all taxonomies (event types)</h2>
            </div>

            <div className='Page__list row fw'>
                {
                    taxonomiesData.length > 0 ?
                    taxonomiesData.map((curr, index) => 
                        <PageItem
                            key={index}
                            fullData={curr}
                            title={curr.name}
                            dateTime='N/A'
                            location='N/A'
                            type='taxonomie'
                            image={curr.image}
                        />
                    ) :
                    (
                        fetchingTaxonomiesData ?
                        <Loading/> :
                        <h2>(No Taxonomies found...)</h2>
                    )
                }
            </div>
        </div>  
    )
}

export default Taxonomies;