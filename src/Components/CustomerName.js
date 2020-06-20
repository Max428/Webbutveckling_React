import React from 'react';
import CustomerPhoto from './CustomerPhoto';

const user = {
    firstName: 'Magnus',
    lastName: 'Persson',
    personalNumber: 123456+'-'+1234
}

class CustomerName extends React.Component {
  
    render(){

    
    return (

        <div id="photo-and-name">
           <CustomerPhoto />
           <div id="name">
            <form id="customer-name">
            <tr>
            <td>
            <h2 type="text" name="firstname">{user.firstName}</h2>
            </td>
            <td>
            <h2 type="text" name="lastname">{user.lastName}</h2>
            </td>
            </tr>
            <p>Person Nr/Organisations Nr</p>
            <h3 type="number" name="resonnumber">{user.personalNumber}</h3>
            </form>

            </div>
        </div>
    );
}
}
export default CustomerName;


