import React from 'react';

const Stats = ({ data, total }) => {
    const headers = data.map((item) => item.industry);
    const headersSet = new Set(headers);

    const medicine = data.filter((item) => item.industry === 'medicine').map((total) => total.invested).reduce((accum, item) => { return accum + item });
    const build = data.filter((item) => item.industry === 'build').map((total) => total.invested).reduce((accum, item) => { return accum + item });
    const fin = data.filter((item) => item.industry === 'fin').map((total) => total.invested).reduce((accum, item) => { return accum + item });
    const indX = data.filter((item) => item.industry === 'ind-x').map((total) => total.invested).reduce((accum, item) => { return accum + item });
    const other = data.filter((item) => item.industry === 'other').map((total) => total.invested).reduce((accum, item) => { return accum + item });

    const persents = (summ) => {
        return (summ / total) * 100
    };

    return (
        <>
            <div style={{ fontSize: 36, padding: '10px 30px', color: '#3C4368'}}>{total} SEK</div>
            <div style={{ display: 'flex', width: '100%', padding: '0 30px', overflow: 'hidden' }}>
                <div style={{ width: `${persents(medicine)}%`, height: 20, background: '#5B74FF', borderRadius: '6px 0 0 6px' }}>
                </div>
                <div style={{ width: `${persents(build)}%`, height: 20, background: '#34BFA3' }}>
                </div>
                <div style={{ width: `${persents(fin)}%`, height: 20, background: '#FD397A' }}>
                </div>
                <div style={{ width: `${persents(indX)}%`, height: 20, background: '#3D4465' }}>
                </div>
                <div style={{ width: `${persents(other)}%`, height: 20, background: '#A1A8C3', borderRadius: '0 6px 6px 0' }}>
                </div>
            </div>

            <div style={{display: 'flex', padding: '50px 30px'}}>
                <div style={{ width: 20, height: 20, background: '#5B74FF', borderRadius: 4}} />
                <div>Medicine</div>
                <div>{medicine}</div>
            </div>

            {/* <CompanyItem background='' label='' total={totalInvested}/> */}
        </>
    );
};

export default Stats;
