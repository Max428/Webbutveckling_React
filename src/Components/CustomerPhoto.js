import React from 'react';
import img from '../Images/meduza1.jpg';


const CustomerPhoto = () => {

    return (
        <div id="photo">
        <img src={img} alt="customer-photo" className="round"/>
        </div>        
    );
}
export default CustomerPhoto;