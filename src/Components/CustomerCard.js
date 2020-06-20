import React from 'react';

const CustomerCard = props => {

   
    return (
        <div>
        
        <div className="contact-information">
        <p id="contactsTitle">Kontaktuppgifter</p>

        <form>

        <tr>
        <td><p>Telefon:</p></td>
        <td type="number" name="phonenumber">079 946 3654</td>
        </tr>

        <tr>
        <td><p>Mail:</p></td>
        <td type="text" name="email">magnus.persson@hotmail.com</td> 
        </tr>

        <tr>
        <td><p>Address:</p></td>
        <td type="text" name="address">Lantmilsgatan 7</td>
        </tr>
        
        <tr>
        <td><p>Postnummer:</p></td>
        <td type="number" name="postmunber">415 01</td>
        </tr>
        
        <tr>
        <td><p>Postort:</p></td>
        <td type="text" name="city">Göteborg</td>
        </tr>
        
        </form>

        </div>
        </div>
    );
}

export default CustomerCard;