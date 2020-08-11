import React from 'react';

import './Input.styled.sass';

const Input = ({ label, currentValue, handleChange, disabled, type }) => {
    return (
        <>
            <label>{label}</label>
            <input className='inputContainer' type="text" value={currentValue} onChange={(e) => handleChange(e.target.value)} disabled={disabled} type={type} />
        </>
    );
};

export default Input;
