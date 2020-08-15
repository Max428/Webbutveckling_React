import React from 'react';

import './Stats.styled.sass';

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
};

const Stats = ({ data, total }) => {
    const headers = data.map((item) => item.industry);
    const headersSet = new Set(headers);

    const extendedHeaders = [...headersSet].map((header) => ({
        name: header,
        color: getRandomColor(),
    }));

    const totalValue = (key) => {
        return data.filter((item) => item.industry === key).map((total) => total.invested).reduce((accum, item) => { return accum + item });
    };

    const companyNames = (key) => {
        return data.filter((item) => item.industry === key).map((total) => total.companyName).reduce((accum, item) => { return accum + ', ' + item });
    };

    const percents = (summ) => {
        return (summ / total) * 100
    };

    const UpdateTimestamp = () => {
        const date = new Date().toLocaleString().slice(0, 10);
        return (
            <div className='updated-date'>Uppdaterat {date}</div>
        );
    };

    return (
        <>
            <div className='total-invested'>{total} SEK <UpdateTimestamp /></div>
            <div className='stats-bar'>
                {extendedHeaders.map((item, i) => (
                    <div key={i} style={{ width: `${percents(totalValue(item.name))}%`, height: 20, background: `${item.color}` }} />
                ))}
            </div>
            {extendedHeaders.map((item, i) => (
                <div key={i} className='stats-style'>
                    <div style={{ width: 20, height: 20, background: `${item.color}`, borderRadius: 4 }} />
                    <div>{item.name}<p>{companyNames(item.name)}</p></div>
                    <div>{totalValue(item.name)} SEK</div>
                </div>
            ))}
            {/* <CompanyItem background='' label='' total={totalInvested}/> */}
        </>
    );
};

export default Stats;
