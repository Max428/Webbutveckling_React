import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import data from '../Data/Company.json';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
require("bootstrap/scss/bootstrap.scss");

class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            data: []
        };
    }

render () {
    
    const columns = [
        {dataField: "companyName", text: "Företag"},
        {dataField: "invested", text: "Innehav"},
        {dataField: "actionType", text: "Aktietyp"},
        {dataField: "numberOfActions", text: "Antal Aktier"},
        {dataField: "actionNumber", text: "Aktienummer"},
        {dataField: "ownershipInterest", text: "Ågarandel, %"},
        {dataField: "votingPower", text: "Röstvärde, %"}
    ];

    const options = {
        paginationSize: 7,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',

        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        
        sizePerPageList: [{
            text: 'visa 10', value: 10
        }, {
            text: 'visa 20', value: 20
        }, {
            text: 'visa alla sidor', value: data.length
        }]
    };  

return (
        <div>
        <Sidebar />

        <div className="page">

            <div className="header">Portfölj</div>

                <div className="portfolio-window">

                <div className="table">
                <BootstrapTable 
                keyField="companyName"
                data={data}
                columns={columns}
                pagination={paginationFactory(options)} className="pagination"
                />
                </div>
                </div>
            </div>        
        </div>
        )
    }
}
export default Portfolio;


/*
import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import data from '../Data/Company.json';
import PortfolioTable from '../Components/PortfolioTable';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
//import Pagination from "react-js-pagination";

class Portfolio extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            data: [],
            activePage: 0,
            pageNumber: 1,
        };
    }

    componentDidMount() {
        const results = data.slice(0, 10);
        this.setState({
            data: results,
        });
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    nextPage = (pageNumber, prevPage, nextPage) => {
        this.setState({data: [...data.results], currentPage: pageNumber, prevPage, nextPage})
    }
    
render () {

    return (
        <div>
        <Sidebar />

        <div className="page">

            <div className="header">Portfölj</div>

            <div className="portfolio-window">

            <table>
            
                <thead>
                <th>Företag</th>
                <th>Innehav</th>
                <th>Aktietyp</th>
                <th>Antal Aktier</th>
                <th>Aktienummer</th>
                <th>Ågarandel</th>
                <th>Röstvärde</th>
                <th> </th>
                </thead>
                
                <tbody>
                {this.state.data.map((company) => {
                    return (
                        <PortfolioTable 
                        companyName={company.companyName}
                        invested={company.invested}
                        actionType={company.actionType}
                        numberOfActions={company.numberOfActions}
                        actionNumber={company.actionNumber}
                        ownershipInterest={company.ownershipInterest}
                        votingPower={company.votingPower}
                        download={company.download}
                        />   
                    )
                })}
                </tbody>
            </table>

            <Pagination
            itemClass="page-item"
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={data.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}/>
            
            </div>
        </div>
        </div>
    );
}
}
export default Portfolio;

*/