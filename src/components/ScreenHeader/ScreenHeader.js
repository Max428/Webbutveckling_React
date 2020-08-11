import React from 'react';

import './ScreenHeader.styled.sass';

const ScreenHeader = ({ label, updateTimestamp }) => {
    return (
        <div className='screen-header-container'>
            {label}
            {updateTimestamp && updateTimestamp}
        </div>
    );
};

export default ScreenHeader;
