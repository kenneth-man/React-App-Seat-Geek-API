import './App.css';
import ContextProvider from './Context';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Events';
import EventsToday from './Pages/EventsToday';
import Venues from './Pages/Venues';
import Performers from './Pages/Performers';
import Taxonomies from './Pages/Taxonomies';
import Favourites from './Pages/Favourites';
import Details from './Pages/Details';
import SideNavBar from './Components/SideNavBar';

function App() {
  return (
    <div className="App row">
      <ContextProvider>
        <BrowserRouter>
          <SideNavBar/>

          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Events' exact={true} component={Events}/>
            <Route path='/EventsToday' exact={true} component={EventsToday}/>
            <Route path='/Venues' exact={true} component={Venues}/>
            <Route path='/Performers' exact={true} component={Performers}/>
            <Route path='/Taxonomies' exact={true} component={Taxonomies}/>
            <Route path='/Favourites' exact={true} component={Favourites}/>
            <Route path='/Details/:objectName' exact={true} component={Details}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;