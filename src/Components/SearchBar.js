import React from 'react';
import { ReactComponent as MagnifyingGlassIcon } from '../Res/Icons/magnifying-glass.svg';

const SearchBar = ({ state, setState }) => {
    return (
        <div className='searchbar row'>
            <input className='fh' value={state} onChange={e => setState(e.target.value)}/>

            <MagnifyingGlassIcon/>
        </div>
    )
}

export default SearchBar;