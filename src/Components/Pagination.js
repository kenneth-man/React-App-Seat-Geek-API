import React, { useContext, useEffect, useState, useRef } from 'react';
import { Context } from '../Context';

const Pagination = ({ eventType, query, date, data, meta }) => {
    const { fetchData } = useContext(Context);
    const [pageNumber, setPageNumber] = useState(1);
    const isInitialRender = useRef(true);

    const paginationBtnOnClick = (id) => {
        id === 'previous-btn' ? 
        (pageNumber === 1 ? setPageNumber(Math.floor(meta.total / meta.per_page)) : setPageNumber(pageNumber => pageNumber -= 1)) :
        (pageNumber === Math.floor(meta.total / meta.per_page) ? setPageNumber(1) : setPageNumber(pageNumber => pageNumber += 1));
    }

    useEffect(() => {
        !isInitialRender.current && data.length !== 0 ? fetchData(eventType, query, date, pageNumber) : isInitialRender.current = false;
    }, [pageNumber])

    useEffect(() => {
        //if data state is empty (e.g. when searchbar is cleared, reset page number to 1)
        if(data.length === 0) setPageNumber(1);
    }, [data])

    return (
        <div className='pagination Page__section--small center fw'>
            {
                data.length > 0 ?
                <div className='pagination__wrapper row'>
                    <button id='previous-btn' onClick={e => paginationBtnOnClick(e.target.id)}>Previous</button>

                    <h1>{pageNumber}</h1>

                    <button id='next-btn' onClick={e => paginationBtnOnClick(e.target.id)}>Next</button>
                </div> :
                null
            }
        </div>
    )
}

export default Pagination;