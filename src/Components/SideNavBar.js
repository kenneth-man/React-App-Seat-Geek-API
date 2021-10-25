import React, { useContext } from 'react';
import { Context } from '../Context';
import { SideNavBarData } from '../SideNavBarData';
import SideNavBarTab from './SideNavBarTab';
import menuIcon from '../Res/Icons/menu.svg';
import crossIcon from '../Res/Icons/cross.svg';
import seatGeekLogo from '../Res/Images/seat-geek-logo.png';

const SideNavBar = () => {
    const { isPageCondensed, setIsPageCondensed } = useContext(Context);

    const toggleIsPageCondensed = () => setIsPageCondensed(!isPageCondensed);

    return (
        <div className='sideNavBar col fw fh'>
            <button className='clear center' onClick={toggleIsPageCondensed}>
                <img src={isPageCondensed ? crossIcon : menuIcon} alt='menu-icon'/>
            </button>

            <div className='sideNavBar__tabs col'> 
                {
                    SideNavBarData.map((curr, index) => 
                        <SideNavBarTab
                            key={index}
                            path={curr.path}
                            icon={curr.icon}
                            title={curr.title}
                        /> 
                    )
                }
            </div>

            <div className='sideNavBar__copy col'>
                <img src={seatGeekLogo} alt='seat-geek-logo' className='sideNavBar__logo'/>
                <h3>© 2021 SeatGeek. All rights reserved.</h3>
            </div>
        </div>
    )
}

export default SideNavBar;