import React from 'react';
import Sidebar from '../Components/Sidebar';


const Home = () => {

    return (   
        <div>
        <Sidebar />
        <div className="header">Hem</div>

        <div className="homepage">

        <div className="Dialog">
        <p>Välkommen Magnus! Ditt innehav blev senast uppdaterad 2020-02-26. Ta gärna en titt!</p>
        </div>
        

        <body>
        <div class="block-left">
        <div id="header">Min Profil
        <button id="button">Redigera</button>
        </div>
        </div>

        <div class="block-right">
        <div id="header">Mitt Innehav
        <button id="button">Min Portfölj</button>
        </div>
        </div>             
        </body>

        </div>
        </div>
    );
}
export default Home;