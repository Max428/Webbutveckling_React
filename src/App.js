import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import 'assets/global.css';
import './App.styled.sass';

import Home from 'screens/Home';
import Portfolio from 'screens/Portfolio';
import Settings from 'screens/Settings';
import Navigation from 'components/Navigation';

import { initialValues } from 'store';

const App = () => {
    const [userData, setUserData] = useState(initialValues);

    const location = useLocation();

    return (
        <>
            <Navigation currentLocation={location.pathname} />
            <Switch>
                {/* 1st screen */}
                <Route path='/portfolio' render={() => <Portfolio />} />
                {/* 2nd screen Settings with nested routes */}
                <Route path='/settings' render={() => <Settings userData={userData} setUserData={setUserData} />} />
                {/* Default page */}
                <Route exact path='/' render={() => <Home userData={userData} />} />
            </Switch>
        </>
    );
};

export default App;
