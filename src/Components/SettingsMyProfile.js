import React from 'react';
import CustomerPhoto from './CustomerPhoto';



//component for the page Settings to update customers informaion
const SettingsMyProfile = () => {

    return (

        <div className="department">

        <CustomerPhoto />

        <form id="customer-name-for-settings">
        
            <tr>
            <td><p>Förnamn</p>
            <input type="text" name="firstname"/>
            </td>
            <td><p>Efternnamn</p>
            <input type="text" name="lastname" />
            </td>
            </tr>
           
            <p>Personnummer</p>
            <input type="number" name="resonnumber" />
            
            <p>Address</p>
            <input type="text" name="address" />

            <tr>
            <td><p>Postort</p>
            <input type="text" name="city" />
            </td>
            <td><p>Postnummer</p>
            <input type="number" name="postnumber" />
            </td>
            </tr>

            <p>Telefonnummer</p>
            <input type="number" name="phonenumber" />

            <p>Email</p>
            <input type="text" name="email" />    
   
        </form>
        
        </div>
              
    );
}

export default SettingsMyProfile;