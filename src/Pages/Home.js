import React from 'react';
import Sidebar from '../Components/Sidebar';
import CustomerCard from '../Components/CustomerCard';
import CustomerPhotoAndName from '../Components/CustomerPhotoAndName';
import Dialog from '../Components/Dialog';
import IndustryPreferences from '../Components/IndustryPreferences';
import MyPortfolio from '../Components/MyPortfolio';

const Home = () => {

    return (
        <div>
            

            <div className="page">
            <Sidebar />
            <div className="header">Hem</div>

            <Dialog />
            
            <body>
                <div class="block-left">
                    <div id="block-header">
                        <p>Min Profil</p>
                    <button id="button">Redigera</button>
                    </div>

                    <CustomerPhotoAndName />
                    
                    <IndustryPreferences />
                    
                    <CustomerCard />

                    </div>
                
                <div class="block-right">
                    <div id="block-header">Mitt Innehav
                    <button id="button">Min Portfölj</button>
                    </div>

                    <MyPortfolio />


                </div>             
            </body>
        </div>
        </div>
    );
}
export default Home;