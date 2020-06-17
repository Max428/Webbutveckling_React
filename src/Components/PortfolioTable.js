import React from "react";

const PortfolioTable = ({companyName, invested, auctionType, numberOfActions, actionNumber, ownershipInterest, votingPower}) => {

    return (

        <tr>
        
            <td>{companyName}</td>
            
            <td>{invested}</td>
            
            <td>{auctionType}</td>
            
            <td>{numberOfActions}</td>

            <td>{actionNumber}</td>

            <td>{ownershipInterest}</td>

            <td>{votingPower}</td>
            
        </tr>
     );
    };
    export default PortfolioTable;