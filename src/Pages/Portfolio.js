import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import PortfolioTable from '../Components/PortfolioTable';
//import data from './Data/Company.json';

const NR_OF_LINES = 10;

class Portfolio extends Component {
    sate = {
        companies: [],
    }

render () {
  
    return (
        <div>
        <Sidebar />
        
        <div className="page">

            <div className="header">Portfölj</div>

            <div className="settings-window">

            <table className="portfolio-container">
                <tbody>
                <th>Företag</th>
                <th>Innehav</th>
                <th>Aktietyp</th>
                <th>Antal Aktier</th>
                <th>Aktienummer</th>
                <th>Ågarandel</th>
                <th>Röstvärde</th>
                </tbody>

              
                

            </table>
            </div>
        <div>
        </div>
        </div>
        </div>
    );
}
}
export default Portfolio;