import React, { useState } from "react";

import download from 'images/download.svg';
import './Card.styled.sass';

const Card = ({ card }) => {
    const [tooltipIsShown, showTooltip] = useState(false);

    const triades = ((text) => {
        let x = parseInt(text, 10).toString();
        const r = /(\d+)(\d{4})/;

        while (r.test(x)) {
            x = x.replace(r, '$1-$2');
        };

        return x.split('');
    });

    return (
        <div className='card-container'>
            <div>{card.companyName}</div>
            <div>{card.invested} SEK</div>
            <div>{card.actionType}</div>
            <div>{card.numberOfActions} st</div>
            <div>{triades(card.actionNumber)}</div>
            <div>{card.ownershipInterest} %</div>
            <div>{card.votingPower} %</div>
            <div
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => showTooltip(false)}
            >
                <img className='download-image' src={download} alt='' />
                {tooltipIsShown && <span className='card-tooltip'>Ladda ner aktiebrevet</span>}
            </div>
        </div>
    );
};
export default Card;
