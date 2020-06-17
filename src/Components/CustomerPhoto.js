import React from 'react';
import img from '../Images/meduza1.jpg';


const CustomerPhoto = () => {

    return (
        <div>
        <div id="photo">
        <img src={img} alt="customer-photo" className="round"/>
        </div>        
        </div>
    );
}
export default CustomerPhoto;