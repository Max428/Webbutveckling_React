import React from 'react';
import CustomerPhoto from './CustomerPhoto';

const CustomerName = () => {

    
    return (

        <div id="photo-and-name">
           <CustomerPhoto />
           <div id="name">
            <form id="customer-name">
            <tr>
            <td>
            <h2 type="text" name="firstname">Magnus Persson</h2>
            </td>
            <td>
            <h2 type="text" name="lastname"></h2>
            </td>
            </tr>
            <p>Person Nr/Organisations Nr</p>
            <h3 type="number" name="resonnumber">780817-6331</h3>
            </form>
            </div>
        </div>
    );

}
export default CustomerName;