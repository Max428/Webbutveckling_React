import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import './Preferences.styled.sass';

const Preferences = ({ userData, setUserData }) => {
    const [options, setOptions] = useState(userData.industryOptions);

    const handleChange = (item) => {
        const changedOptions = options.map((itemToChange) => itemToChange.label === item.label ? { ...itemToChange, value: !item.value } : itemToChange);

        setOptions(changedOptions);
        setUserData({ ...userData, industryOptions: changedOptions });
        saveDataToLocalStorage({ ...userData, industryOptions: changedOptions });
    };

    return (
        <div>

            <div className='text'>Mina prefererade industrier att investera inom</div>

            <div className='options'>
            {options && options.map((item, i) => (
                <div key={i}>
                    <input type='checkbox' checked={item.value} onChange={() => handleChange(item)} />
                    <span>{item.label}</span>
                </div>
            ))}
            </div>

            <div className='tips'>Tips! Ifall du väljer att integrerar din bank så kan vi anpassa dina investeringar utefter din ekonomi och preferenser.</div>

            <div className='link'>Integrera min bank</div>
            <p>(detta kommer att skicka dig vidare etc....)</p>

        </div>
    );
};

export default Preferences;