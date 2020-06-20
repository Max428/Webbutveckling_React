import React, {Component} from 'react';
import CustomerPhoto from './CustomerPhoto';
import CustomerName from './CustomerName';


//component for the page Settings to update customers informaion
//is not fixed yet

class SettingsMyProfile extends Component {

    constructor(props){
        super(props);
        
    this.state = ({
            firstName: null,
            lastname: null,
            personalNumber: null
        });

        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
        

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.setState.value)
    }

    render() {
        return (
            <div className="department">
            
                <CustomerPhoto />

                <div id="customer-name-for-settings">

                
                <form onSubmit={this.handleSubmit} >
                
                <tr>
                <td>
                <label htmlFor="name"><p>Förnamn</p></label>
                
                <input type="text" id="firstname" onChange={this.handleChange}/>
                
                </td>
                <td>
                <label htmlFor="name"><p>Efternamn</p></label> 
                <input type="text" id="lastname" onChange={this.handleChange} />
                </td>
                </tr>

                <label htmlFor="name"><p>Personnummer</p></label>
                <input type="number" id="personnumber" onChange={this.handleChange} />
                

                
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
                

                <button onClick={this.onSubmit}>Spara</button>

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