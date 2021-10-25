import { ReactComponent as HomeIcon }  from './Res/Icons/home.svg';
import { ReactComponent as  EventsIcon } from './Res/Icons/calendar.svg';
import { ReactComponent as EventsTodayIcon }  from './Res/Icons/clock.svg';
import { ReactComponent as VenuesIcon }  from './Res/Icons/shop.svg';
import { ReactComponent as PerformersIcon }  from './Res/Icons/modern-mic.svg';
import { ReactComponent as TaxonomiesIcon }  from './Res/Icons/archive.svg';
import { ReactComponent as FavouritesIcon } from './Res/Icons/smile-o.svg';

export const SideNavBarData = [
    {
        path:'/',
        icon:<HomeIcon/>,
        title:'Home'
    },
    {
        path:'/Events',
        icon:<EventsIcon/>,
        title:'Events'
    },
    {
        path:'/EventsToday',
        icon:<EventsTodayIcon/>,
        title:'Events Today'
    },
    {
        path:'/Venues',
        icon:<VenuesIcon/>,
        title:'Venues'
    },
    {
        path:'/Performers',
        icon:<PerformersIcon/>,
        title:'Performers'
    },
    {
        path:'/Taxonomies',
        icon:<TaxonomiesIcon/>,
        title:'Taxonomies'
    },
    {
        path:'/Favourites',
        icon:<FavouritesIcon/>,
        title:'Favourites'
    },
]