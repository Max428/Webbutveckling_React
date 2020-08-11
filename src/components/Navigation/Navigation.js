import React from 'react';
import { Link } from 'react-router-dom';

import imgLogo from 'images/Image1.png';
import './Navigation.styled.sass';

const Navigation = ({ currentLocation }) => {
    return (
        <div className='container'>
            <div className="logo">
                <img src={imgLogo} alt='logo'></img>
            </div>
            <div className='navigation-links'>
                <Link to='/' className={currentLocation === '/' ? 'link-selected' : 'link-item'}>
                    <div className="fas fa-home"></div>
                            Home
                </Link>
                <Link to='/portfolio' className={currentLocation === '/portfolio' ? 'link-selected' : 'link-item'}>
                    <div className="fas fa-briefcase"></div>
                            Portfolio
                </Link>
                <Link to='/settings' className={currentLocation === '/settings' ? 'link-selected' : 'link-item'}>
                    <div className="fas fa-cog"></div>
                            Settings
                </Link>
            </div>
            <div className='loggout'>
                <div className="fas fa-sign-out-alt"></div>
                Logga ut
            </div>
        </div>
    );
};

export default Navigation;
