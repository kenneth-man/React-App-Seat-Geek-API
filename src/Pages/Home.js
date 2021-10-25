import React,{ useContext } from 'react';
import { Context } from '../Context';
import Banner from '../Components/Banner';
import HomeSection from '../Components/HomeSection';
import bannerImage from '../Res/Images/seat-geek-banner.png';
import bannerImage2 from '../Res/Images/seat-geek-banner2.png';
import magnifyingGlassIcon from '../Res/Icons/magnifying-glass.svg';
import dollarIcon from '../Res/Icons/attach_money.svg';
import seatingIcon from '../Res/Icons/where_to_vote.svg'

const Home = () => {
    const { isPageCondensed } = useContext(Context);

    return (
        <div className={isPageCondensed ? 'Page Page__condensed col fh' : 'Page col fh'}>
            <div className='Page__section--medium col fw'>
                <h1 style={{fontWeight: '900'}}>SeatGeek | Your Ticket to Sports, Concerts & More</h1>
                <h2>Your next best-night-ever is waiting...<br></br>And we have the tickets.</h2>
                <h2>SeatGeek is the leading mobile-focused ticket platform that enables fans to buy and sell tickets for sports, concert, and theater events.</h2>
            </div>

            <Banner image={bannerImage}/>

            <div className='Page__section--medium col fw'>
                <HomeSection title='The largest inventory on the web' image={magnifyingGlassIcon}/>
            
                <h2>SeatGeek is a ticket search engine that makes finding tickets to live entertainment a cinch. We search dozens of the biggest ticket sites and present the results all in one place.</h2>
            </div>

            <Banner image={bannerImage2}/>

            <div className='Page__section--medium col fw'>
                <HomeSection title='The most bang for your buck' image={dollarIcon}/>
                
                <h2>SeatGeek’s Deal Score system analyzes thousands of ticket listings and rates the best bargains. The higher the Deal Score, the better the value.</h2>
            </div>

            <Banner image={bannerImage}/>

            <div className='Page__section--medium col fw'>
                <HomeSection title="Know where you'll sit" image={seatingIcon}/>
                
                <h2>Our gorgeous interactive maps with 3D views make finding the perfect seat simple. No more seats behind a concrete pillar. To make things easier, we display the Deal Score on every row.</h2>
            </div>
        </div>
    )
}

export default Home;