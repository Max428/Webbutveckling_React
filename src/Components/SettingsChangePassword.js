import React from 'react';

const SettingsChangePassword = () => {
    return (

        <div className="department">

        <form id="customer-name-for-settings">
            <p>Nuvarande lösenord</p>
            <input type="text" name="password" />

            <p>Nytt lösenord</p>
            <input type="text" name="password" />

            <p>Bekräfta nytt lösenord</p>
            <input type="text" name="password" />

        </form>

        </div>
    );
}

export default SettingsChangePassword;