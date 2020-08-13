import React from 'react';
import { Link } from 'react-router-dom';

import './RouteWithLabel.styled.sass';

const RouteWithLabel = ({ label, route, name }) => {
    return (
        <div className='route-with-label-container'>
            <div>{label}</div>
            <Link to={route} className='link-button'>{name}</Link>
        </div>
    );
};

export default RouteWithLabel;
