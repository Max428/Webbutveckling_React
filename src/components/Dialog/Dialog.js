import React from 'react';

import './Dialog.styled.sass';

const Dialog = ({ userData }) => {
    const date = new Date().toLocaleString().slice(0, 10);

    return (
        <div className="dialog">
            <p>Välkommen {userData.firstName}! Ditt innehav blev senast uppdaterad {date}. Ta gärna en titt!</p>
        </div>
    );
};

export default Dialog;
