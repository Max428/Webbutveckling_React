import React from 'react';
import CustomerPhoto from './CustomerPhoto';
import CustomerName from './CustomerName';


//component for the page Settings to update customers informaion
//is not fixed yet

class SettingsMyProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSave(event) {
        alert('Information is updated: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="department">
            
                <CustomerPhoto />

                <div id="customer-name-for-settings">

                
                <form onSubmit={this.handleSave} onChange={this.handleChange}>
                
                <tr>
                <td>
                <p>Förnamn</p>
                <input type="text" name="firstname" />
                
                </td>
                <td>
                <p>Efternamn</p> 
                <input type="text" name="lastname"  />
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
                

                <button type="submit" value="Save">Spara</button>

                </form>


                </div>
            </div>

        )
    }

}

export default SettingsMyProfile;


/*
const SettingsMyProfile = () => {

    return (

        <div className="department">

        <CustomerPhoto />

        <div id="customer-name-for-settings">
        
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
   
        </div>
        
        </div>
              
    );
}

export default SettingsMyProfile;
*/