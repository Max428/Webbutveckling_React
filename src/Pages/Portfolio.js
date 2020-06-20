import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';



class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            companies: [],
        }
        this.getData = this.getData.bind(this);
    }

    getData(){
        const promise = fetch('./Data/Company.json')
   .then(response => {
     if (response.status >= 400) {
     throw `Response Invalid ( ${response.status} )`;
     return;
   }
   return response.json();
 })
 .then(({results}) => {
   return results;
 })
 .catch(error => {
   console.log(error);
 });

 return promise;
}

    componentDidMount() {  
        this.getData()
        .then(data => {
            this.setState( { companies: data } );
        });
  }

render () {
  
    return (
        <div>
        <Sidebar />
        
        <div className="page">

            <div className="header">Portfölj</div>

            <div className="settings-window">

            <table className="portfolio-container">
                <tbody>
                <th>Företag</th>
                <th>Innehav</th>
                <th>Aktietyp</th>
                <th>Antal Aktier</th>
                <th>Aktienummer</th>
                <th>Ågarandel</th>
                <th>Röstvärde</th>
                </tbody>
                
                

            </table>
           
            </div>
        </div>
        </div>
    );
}
}
export default Portfolio;