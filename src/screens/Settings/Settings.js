import React, { useState } from 'react';

import SettingsTabs from 'components/SettingsTabs';
import ScreenHeader from 'components/ScreenHeader';

import './Settings.styled.sass';
import Password from './Password';
import Preferences from './Preferences';
import PersonalInformation from './PersonalInformation';

const Settings = ({ userData, setUserData }) => {
    const [currentTab, setCurrentTab] = useState('1');

    return (
        <div className='settingsContainer'>
            <ScreenHeader label='Setting' />
            <div className='settingsTabs'>
                <SettingsTabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
                {(() => {
                    switch (currentTab) {
                        case '1':
                            return <PersonalInformation userData={userData} setUserData={setUserData} />

                        case '2':
                            return <Password userData={userData} setUserData={setUserData} />

                        case '3':
                            return <Preferences userData={userData} setUserData={setUserData} />

                        default:
                            return <PersonalInformation userData={userData} setUserData={setUserData} />
                    }
                })()}
            </div>
        </div>
    );
};

export default Settings;
