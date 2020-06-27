import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import {Tooltip} from '@material-ui/core';
import data from '../Data/Company.json';
import BootStrapTable, {TableHeaderColumn} from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
require("bootstrap/scss/bootstrap.scss");


function rankFormatter() { 
    return (
            <Tooltip title="Ladda ner aktiebrevet"><i style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}
            className="fas fa-download"></i></Tooltip>
            );
        }

function priceFormatter(cell) {
    return (cell + " SEK");
    }
    
function amountFormatter(cell) {
    return (cell + " st");
}

function percentage(cell) {
    return (cell + " %");
}

function triades(cell) {
    var x=parseInt(cell,10).toString();
    var r=/(\d+)(\d{4})/;
    while(r.test(x)){
      x=x.replace(r,'$1-$2');
    };
    return x.split('');
  }

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            date: new Date().toLocaleString(),
            
        };
    }

render () {

    const columns = [
        {dataField: "companyName", text: "Företag", type: "string"},
        {dataField: "invested", text: "Innehav", type: "number", formatter: priceFormatter},
        {dataField: "actionType", text: "Aktietyp", type: "string"},
        {dataField: "numberOfActions", text: "Antal Aktier", type: "number", formatter: amountFormatter},
        {dataField: "actionNumber", text: "Aktienummer", type: "number", formatter: triades},
        {dataField: "ownershipInterest", text: "Ågarandel", type: "number", formatter: percentage},
        {dataField: "votingPower", text: "Röstvärde", type: "number", formatter: percentage},
        {dataField: "download", 
        text: " ",
        sort: false,
        formatter: rankFormatter,
        headerAttrs: { width: 50},
        attrs: { width: 50, className: "DowloadRow" } 
      }
    ]

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
            text: 'visa 10', value: 5
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

            <div className="header"><td>Portfölj</td><td><p>Senast updaterat {this.state.date}</p></td></div>

                <div className="portfolio-window">

                <div className="table">
                <BootStrapTable 
                keyField="companyName"
                data={data}
                columns={columns}
                pagination={paginationFactory(options)} className="pagination">

                <TableHeaderColumn dataField='invested' dataFormat={priceFormatter}>Price</TableHeaderColumn>
                </BootStrapTable>           
                </div>
                </div>
            </div>        
        </div>
        )
    }
}
export default Portfolio;