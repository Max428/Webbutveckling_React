import React from 'react';
import img from '../Images/meduza1.jpg';

const CustomerPhotoAndName = () => {
    return (
        <div id="customerPhotoAndName">
            <div id="photo">
            <img src={img} alt="customer-photo" className="round"/>
            </div>

            <div id="customer-name">
                <h2>Magnus Persson</h2>                    
                <p>Person Nr/Organisations Nr</p>
                <h3>780817-6331</h3>
            </div>
        </div>
    );

}
export default CustomerPhotoAndName;