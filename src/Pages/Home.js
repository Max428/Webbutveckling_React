import React from 'react';
import Sidebar from '../Components/Sidebar';
import CustomerCard from '../Components/CustomerCard';
import CustomerName from '../Components/CustomerName';
import Dialog from '../Components/Dialog';
import IndustryPreferences from '../Components/IndustryPreferences';
import MyPortfolio from '../Components/MyPortfolio';
import Settings from '../Pages/Settings';
import Portfolio from '../Pages/Portfolio';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import CustomerPhoto from '../Components/CustomerPhoto';

const Home = () => {

    return (
        <div>
            

            <div className="page">
            <Sidebar />
            <div className="header">Hem</div>

                <Dialog />
            
                <div class="block-left">
                    <div id="block-header">
                        <p>Min Profil</p>
                    <button id="button">Redigera</button>
                    </div>

                    <CustomerPhoto />

                    <CustomerName />
                    
                    <IndustryPreferences />
                    
                    <CustomerCard />

                </div>
                
                <div class="block-right">
                    <div id="block-header"><p>Mitt Innehav
                    <NavLink to="/portfolio" id="button">Min Portfölj
                    <Switch>
                    <Route path="/portfolio">
                    <Portfolio />
                    </Route>
                    </Switch>
                    </NavLink></p>
                    </div>

                    <MyPortfolio />


                </div>
                        
            </div>
        </div>
    );
}
export default Home;