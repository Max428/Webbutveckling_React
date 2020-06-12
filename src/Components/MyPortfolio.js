import React from 'react';

const MyPortfolio = () => {
    return (
        <div class='holdings-summary'>
        <div id='totalMoney'>
        <p id='userMoney'>827, 300SEK</p>
        <p id='lastUpdate'>Uppdaterad 2020-02-26</p>
        </div>
        <div>
            <div id='moneyGraph'>""""Money Graph""""</div>
            <ul id='portfolio-holdings'>
            <li>Byggsektorn
                <ul>Företag</ul>
                <p>32000 SEK</p>
            </li>
            <li>Medtech
                <ul>Företag</ul>
                <p>32000 SEK</p>
            </li>
            <li>Fintech
                <ul>Företag</ul>
                <p>32000 SEK</p>
            </li>
            <li>Industri
                <ul>Företag</ul>
                <p>32000 SEK</p>
            </li>
            <li> Övrigt
                <ul>Företag</ul>
                <p>32000 SEK</p>
            </li>
            </ul>

        </div>
        </div>
      
    );
}

export default MyPortfolio;