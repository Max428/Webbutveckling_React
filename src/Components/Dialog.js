import React from 'react';

//we need to import Username and date from the data

/*
var curDate = new Date();
curDate = curDate.getFullYear() +'-'+ curDate.getMonth() +'-'+ curDate.getDay();
*/

const user = {
    firstName: 'Magnus',
    lastName: 'Andersson',
    personalNumber: 123456+'-'+1234
}

class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        date: new Date().toLocaleString() 
    };
}

    render() {
        return (
            <div className="Dialog">
            <p>Välkommen {user.firstName}! Ditt innehav blev senast uppdaterad {this.state.date}. Ta gärna en titt!</p>
            </div>
        );
    }
}
   
export default Dialog;
