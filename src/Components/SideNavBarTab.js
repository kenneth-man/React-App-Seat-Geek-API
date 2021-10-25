import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavBarTab = ({ path, icon, title }) => {
    return (
        <div className='sideNavBar__tab row'>
            <NavLink to={path} exact={true} activeClassName='navlink--active' className='navlink center'>
                {icon}
            </NavLink>

            <h1>{title}</h1>
        </div>
    )
}

export default SideNavBarTab;