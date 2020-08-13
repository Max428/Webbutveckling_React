import React from 'react';

import data from 'companiesData/Company.json';

import Dialog from 'components/Dialog';
import ScreenHeader from 'components/ScreenHeader';

import RouteWithLabel from './RouteWithLabel';
import AvatarWithData from './AvatarWithData';
import Stats from './Stats';

import './Home.styled.sass';

const statsHeaders = data.map((item) => item.industry);
const statsHeadersSet = new Set(statsHeaders);

const total = data.map((item) => item.invested).reduce((accum, item) => { return accum + item});

const Home = ({ userData }) => {
    
    return (
        <div className='page'>
            <ScreenHeader label='Hem' />
            <Dialog userData={userData} />

            <div className='home-container'>
                <div className='block'>
                    <RouteWithLabel label='Min Profil' route='/settings' name='Redigera' />
                    <AvatarWithData userData={userData} />
                    {userData.industryOptions && <div className='block-label'>
                        Föredragna Industrier
                        {userData.industryOptions.map((item, i) => item.value === true && (
                            <div key={i}>{item.label}</div>
                        ))}
                    </div>}
                    {/* todo another block with data */}
                    <div className='block-label'>
                        Kontaktuppgifter
                    </div>
                    <div className='block-data'>
                        <div className='block-data-item'>
                            <div>Telefon:</div>&nbsp;
                            <div>{userData.phoneNumber}</div>
                        </div>
                        <div className='block-data-item'>
                            <div>Mail:</div>&nbsp;
                            <div>{userData.email}</div>
                        </div>
                        <div className='block-data-item'>
                            <div>Address:</div>&nbsp;
                            <div>{userData.adress}</div>
                        </div>
                        <div className='block-data-item'>
                            <div>Postnummer:</div>&nbsp;
                            <div>{userData.postNumber}</div>
                        </div>
                        <div className='block-data-item'>
                            <div>Postort:</div>&nbsp;
                            <div>{userData.city}</div>
                        </div>
                    </div>
                </div>
                <div className='block'>
                    <RouteWithLabel label='Mitt Innehav' route='/portfolio' name='Min Portfölj' />
                    <Stats header={[...statsHeadersSet]} data={data} total={total} />
                </div>
            </div>
        </div>
    );
};

export default Home;