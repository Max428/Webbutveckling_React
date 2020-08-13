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
            {options && options.map((item, i) => (
                <div key={i}>
                    <span>{item.label}</span>
                    <input type='checkbox' checked={item.value} onChange={() => handleChange(item)} />
                </div>
            ))}
        </div>
    );
};

export default Preferences;
