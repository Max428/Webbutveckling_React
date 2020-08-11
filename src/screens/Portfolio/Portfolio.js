import React, { useState, useEffect } from 'react';

import data from 'companiesData/Company.json';
import ScreenHeader from 'components/ScreenHeader';
import Pagination from './Pagination';
import Card from './Card';

import './Portfolio.styled.sass';

const header = ['Företag', 'Innehav', 'Aktietyp', 'Antal aktier', 'Aktienummer', 'Ågarandel', 'Röstvärde', 'Download'];
const PAGE_LIMIT = 10;

const TableHeader = () => header.map((item, i) => (<th key={i}>{item}</th>));

const UpdateTimestamp = () => {
    const date = new Date().toLocaleString();

    return (
        <div>Senast uppdaterat {date}</div>
    );
};

const Portfolio = () => {
    const [currentPageData, setCurrentPageData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageLimit, setNewPageLimit] = useState(PAGE_LIMIT);

    const pages = Math.ceil(data.length / currentPageLimit);

    useEffect(() => {
        setCurrentPageData(data.slice(currentPage * currentPageLimit - currentPageLimit, currentPage * currentPageLimit));
    }, [currentPage, currentPageLimit]);

    return (
        <div className='portfolio-container'>
            <ScreenHeader label='Portfölj' updateTimestamp={<UpdateTimestamp />} />
            <div className='portfolio-table'>
                <div className="port-container">
                    <TableHeader />
                    {currentPageData && currentPageData.map((item, i) => {
                        return (
                            <Card key={i} card={item} />
                        );
                    })}
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} setNewPageLimit={setNewPageLimit} currentPageLimit={currentPageLimit} />
            </div>
        </div>
    );
};

export default Portfolio;
