import React from 'react';
import {NavLink} from 'react-router-dom';
import imgLogo from '../Images/Image1.png';
//icons are importend from fontawesome.com site

const Sidebar = props => {

    return (
        <div className="Sidebar-box">

            <div className="menu-wrapper">

                <nav className="sidebar-navigation">
                    <div id="logo">
                        <img src={imgLogo}></img>
                    </div>

                    <div className="sidebar-top">
                                    
                        <div className="links-wrapper">
                            <NavLink className="menu-link" activeClassName="is-active" to="/" exact={true}>
                            <i className="fas fa-home"></i>Hem</NavLink>
                            <NavLink className="menu-link" activeClassName="is-active" to="/portfolio">
                            <i className="fas fa-briefcase"></i>Portfölj</NavLink>
                            <NavLink className="menu-link" activeClassName="is-active" to="/settings/myprofile">
                            <i className="fas fa-cog"></i>Inställningar</NavLink>
                        </div>
                    </div>

                    <div className="sidebar-bottom">
                        <NavLink className="logout-link" to="/startPage">
                        <i className="fas fa-sign-out-alt"></i>Logga ut</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );

};
export default Sidebar;