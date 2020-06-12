import React from 'react';
import {NavLink} from 'react-router-dom';



const Sidebar = props => {

    return(
        <div className="Sidebar-box">

            <div className="menu-wrapper">
                
                <nav className="sidebar-navigation">
                    <div className="sidebar-top">                   
                        <div className="links-wrapper">
                            <NavLink className="menu-link" activeClassName="is-active" to="/" exact={true}>
                            Hem</NavLink>
                            <NavLink className="menu-link" activeClassName="is-active" to="/portfolio">Portfölj</NavLink>
                            <NavLink className="menu-link" activeClassName="is-active" to="/settings">Inställningar</NavLink>
                        </div>
                    </div>

                    <div className="sidebar-bottom" id="line">
                        <NavLink className="logout-link" to="/startPage">Logga ut</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );

};
export default Sidebar;