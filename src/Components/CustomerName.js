import React, {Component} from 'react';
import SettingsMyProfile from './SettingsMyProfile';



class CustomerName extends Component {

    state = {
        users : [{
        firstName: 'Magnus',
        lastName: 'Persson',
        personalNumber: 123456+'-'+1234
        }]
    }

    addUser = (user) => {
        user.id = Math.random();
        let users = [...this.state.users, user];
        this.setState({
            users: users
        })
    }

    render() {
        return (


            <div id="customer-name">
            <tr>
            <td>
            <h2 type="text" id="firstname">
            <CustomerName addUser={this.addUser} />
            </h2>
            </td>
            
            <td>
            <h2 type="text" id="lastname">{this.addUser}</h2>
            </td>
            </tr>
            <p>Person Nr/Organisations Nr</p>
            <h3 type="number" id="personnumber">{this.state.addUser}</h3>

            </div>
        )
    }
}
export default CustomerName;
