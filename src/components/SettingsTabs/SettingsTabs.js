import React from 'react';
import './SettingsTabs.styled.sass';

const SettingsTabs = ({ currentTab, setCurrentTab }) => {
    return (
        <div className='tab-container'>
            <div className={currentTab === '1' ? 'tab-button-active' : 'tab-button'} onClick={() => setCurrentTab('1')}>Min Profil</div>
            <div className={currentTab === '2' ? 'tab-button-active' : 'tab-button'} onClick={() => setCurrentTab('2')}>Byt Lösenord</div>
            <div className={currentTab === '3' ? 'tab-button-active' : 'tab-button'} onClick={() => setCurrentTab('3')}>Preferenser</div>
        </div>
    );
};

export default SettingsTabs;
