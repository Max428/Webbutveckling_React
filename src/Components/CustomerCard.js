import React from 'react';

const CustomerCard = props => {

   
    return (
        <div>
        
        <div className="contact-information">
        <p id="contactsTitle">Kontaktuppgifter</p>
        <form>
        <p>Telefon:</p>
        <p>Mail:</p>
        <p>Address:</p>
        <p>Postnummer:</p>
        <p>Postort:</p>
        </form>
        </div>
        </div>
    );
}

export default CustomerCard;