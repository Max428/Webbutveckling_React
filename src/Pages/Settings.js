import React from 'react';
import Sidebar from '../Components/Sidebar';
import SettingsMyProfile from '../Components/SettingsMyProfile';
import SettingsChangePassword from '../Components/SettingsChangePassword';
import SettingsPreferences from '../Components/SettingsPreferences';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


const Settings = props => {

    return (
        <div>
        <Sidebar />
        <div className="page">

        <div className="header">Inställningar</div>


        <div className="settings-window">

        <div id="settings-header">
        <NavLink to="/settings/myprofile" exact={true} id="settings-link">Min Profil</NavLink>
        <NavLink to="/settings/changepassword" id="settings-link">Byt Lösenord</NavLink>           
        <NavLink to="/settings/preferences" id="settings-link">Preferenser</NavLink>
        </div>

        <div>
        <Route path="/settings/myprofile">
            <SettingsMyProfile />
            </Route>
            <Switch>
            <Route path="/settings/changepassword">
            <SettingsChangePassword />
            </Route>
            <Route path="/settings/preferences">
            <SettingsPreferences />
            </Route>        
            </Switch>
                   
        <div id="block-bottom">
        <button id="settings-submit">Spara</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
}
export default Settings;