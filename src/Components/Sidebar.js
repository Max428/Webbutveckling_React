import React from 'react';
import {Link} from 'react-router-dom';
import {img} from '../Images/Image 2@2x.png';

const Sidebar = props => {
    return(
        <div className="Sidebar-box">
        <img src={img} alt="logo" width="158" height="66"></img>
            <div className="menu-wrapper">
                <div className="menu-layer"></div>
                <nav className="sidebar-navigation">
                    <div className="sidebar-top">                   
                    <div className="links-wrapper">
                    <Link className="menu-link" to="/">
                    Hem
                    </Link>
                    <Link className="menu-link" to="/portfolio">
                    Portfölj
                    </Link>
                    <Link className="menu-link" to="/settings">
                    Inställningar
                    </Link>
                    </div>
                    </div>
                    <div className="sidebar-bottom" id="line">
                    <Link className="logout-link" to="/startPage">
                    Logga ut
                    </Link>
                    </div>
                </nav>
            </div>
        </div>
    );

};
export default Sidebar;