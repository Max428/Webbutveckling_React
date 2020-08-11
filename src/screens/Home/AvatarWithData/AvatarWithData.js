import React from 'react';

import './AvatarWithData.styled.sass';

const AvatarWithData = ({ userData }) => {
    return (
        <div className='avatar-data-container'>
            <div className='avatar'>
                <img src={userData.img} alt='userImage' />
            </div>
            <div className='u-data'>
                <div className='bio'>{userData.firstName} {userData.lastName}</div>
                <div className='u-data-label'>Person Nr/Organisations Nr</div>
                <div className='personal-number'>{userData.personalNumber}</div>
            </div>
        </div>
    );
};

export default AvatarWithData;
