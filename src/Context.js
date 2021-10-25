import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [isPageCondensed, setIsPageCondensed] = useState(false);
    const [eventsData, setEventsData] = useState([]);
    const [eventsTodayData, setEventsTodayData] = useState([]);
    const [fetchingEventsTodayData, setFetchingEventsTodayData] = useState(true);
    const [venuesData, setVenuesData] = useState([]);
    const [performersData, setPerformersData] = useState([]);
    const [taxonomiesData, setTaxonomiesData] = useState([]);
    const [detailsData, setDetailsData] = useState([]);
    const [fetchingTaxonomiesData, setFetchingTaxonomiesData] = useState(true);
    const [recommendationsData, setRecommendationsData] = useState([]);
    const [favouritesData, setFavouritesData] = useState([]);
    const [metaData, setMetaData] = useState([]);
    const [userLat, setUserLat] = useState(null);
    const [userLng, setUserLng] = useState(null);
    const [searchString, setSearchString] = useState('');
    const clientID = 'MjM5NDY3MDh8MTYzNDM4NjA1OC42NTUxMzQ';

    const fetchData = async (searchType, query = false, onDate = false, page = 1) => {
        try {
            let response;

            query ?
            response = await fetch(`https://api.seatgeek.com/2/${searchType}?client_id=${clientID}&q=${formatString(query)}&page=${page}`) :
            (
                onDate ?
                response = await fetch(`https://api.seatgeek.com/2/${searchType}?client_id=${clientID}&datetime_utc=${onDate}&page=${page}`) :
                response = await fetch(`https://api.seatgeek.com/2/${searchType}?client_id=${clientID}&page=${page}`)
            )

            const data = await response.json();

            if(searchType === 'events' && onDate){
                setEventsTodayData(data.events);
            } else if(searchType === 'events') {
                setEventsData(data.events);
            }
        
            if(searchType === 'venues') setVenuesData(data.venues);
            if(searchType === 'performers') setPerformersData(data.performers);
            if(searchType === 'taxonomies') setTaxonomiesData(data.taxonomies);

            setMetaData(data.meta);
        } catch(error){
            console.log(error);
        }
    }

    const fetchRecommendationsData = async (latitude, longitude, id = false) => {
        try {
            let response; 
            
            id ?
            response = await fetch(`https://api.seatgeek.com/2/recommendations?client_id=${clientID}&performers.id=${id}&lat=${latitude}&lon=${longitude}&per_page=25`) :
            response = await fetch(`https://api.seatgeek.com/2/recommendations?client_id=${clientID}&lat=${latitude}&lon=${longitude}`);
            
            const data = await response.json();

            setRecommendationsData(data.recommendations);
        } catch(error){
            console.log(error);
        }
    }

    const fetchUserLatLng = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    //'position' parsed in is a 'GeolocationPosition' object, which has a property called 'coords'
                    setUserLat(position.coords.latitude);
                    setUserLng(position.coords.longitude);
                }, 
                () => alert('couldn\'t get your position')
            );
        }
    }

    //api requires queries to have '+' instead of ' '
    const formatString = (input) => input.replaceAll(' ', '+');

    const formatSlug = (input) => input.replaceAll(' ', '-');

    const formatDate = (input) => input.slice(0, 10);

    const showNoDataMessage = (state, type) => {
        setTimeout(() => {
            if(state.length === 0) type === 'eventsToday' ? setFetchingEventsTodayData(false) : setFetchingTaxonomiesData(false);
        }, 10000);
    }

    //init 'userLat' and 'userLng' states
    useEffect(() => fetchUserLatLng(), [])

    return (
        <Context.Provider value={{ 
            isPageCondensed, eventsData, eventsTodayData, venuesData, performersData, taxonomiesData, searchString, fetchingEventsTodayData,
            fetchingTaxonomiesData, detailsData, recommendationsData, userLat, userLng, metaData, favouritesData,
            fetchRecommendationsData, setIsPageCondensed, setEventsData, setVenuesData, setPerformersData, setSearchString, fetchData, 
            formatDate, formatSlug, showNoDataMessage, setDetailsData, setFavouritesData }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;