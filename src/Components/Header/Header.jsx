import React from 'react';
import './Header.scss';
import logo from './Netflix logo.png';
import {Link} from 'react-router-dom';


import {ImSearch} from 'react-icons/im';
function Header() {
  return (
    <nav className="header">
        <Link to ='/'><img src={logo} alt="netflix" /></Link>
        <div className = 'nav'>
            <Link to = '/tvshows' className='link'>Tv Shows</Link>
            <Link to = '/movies' className='link'>Movies</Link>
            <Link to = '/recently_added' className='link'>Recently Added</Link>
            <Link to = '/mylist' className='link'>My List</Link>
        </div>
        <ImSearch/>
    </nav>
  )
}

export default Header