import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';

import Input from 'components/Input';
import './Password.styled.sass';

const Password = ({ userData, setUserData }) => {
    const [passIsShown, setPassShown] = useState(false);
    const [currentPassword, setCurrentPassword] = useState(userData.password);

    const [newPassword, setNewPassword] = useState(userData.newPassword);
    const [confirmNewPassword, setConfirmNewPassword] = useState(userData.confirmNewPassword);

    const userDataObject = {...userData};

    const handleSave = () => {
        if (newPassword === confirmNewPassword) {
            alert('All fine');
            saveDataToLocalStorage({...userDataObject, password: newPassword});
            setUserData({...userDataObject, password: newPassword });
        } else {
            alert('Repeat password correctly')
        };
    };

    return (
        <div className='input-password'>
            <Input
                type={passIsShown ? 'text' : 'password'}
                label='Nuvarande lösenord'
                currentValue={currentPassword}
                handleChange={setCurrentPassword}
                disabled={userData.password ? false : true}
            />
            <Input
                type={passIsShown ? 'text' : 'password'}
                label='Nytt lösenord'
                currentValue={newPassword}
                handleChange={setNewPassword}
            />
            <Input
                type={passIsShown ? 'text' : 'password'}
                label='Bekräfta nytt lösenord'
                currentValue={confirmNewPassword}
                handleChange={setConfirmNewPassword}
            />
            <button onClick={handleSave} className='button-save'>Spara</button><br/>
        </div>
    );
};

export default Password;
