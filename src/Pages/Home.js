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

                <Dialog firstName/>
            
                <div class="block-left">
                    <div id="block-header">
                        <p>Min Profil</p>
                    <button id="button"><p>Redigera</p></button>
                    </div>
                    <div className="left-container">
                    <CustomerName />
                    
                    <IndustryPreferences />
                    
                    <CustomerCard />
                    </div>
                </div>
                
                <div class="block-right">
                    <div id="block-header">
                        <p>Mitt Innehav</p>
                    <NavLink to="/portfolio" id="button">
                        <p>Min Portfölj</p>
                    <Switch>
                    <Route path="/portfolio">
                    <Portfolio />
                    </Route>
                    </Switch>
                    </NavLink>
                    </div>

                    <MyPortfolio />


                </div>
                        
            </div>
        </div>
    );
}
export default Home;