import React from 'react';

import './Pagination.styled.sass';

const Pagination = ({ currentPage, setCurrentPage, pages, setNewPageLimit, currentPageLimit }) => {
    const showNextPage = () => {
        setCurrentPage(Math.min(currentPage + 1, pages));
    };

    const showPreviousPage = () => {
        currentPage !== 1 && setCurrentPage(currentPage - 1);
    };

    return (
        <div className='pagination-container'>
            <div className='pagination-item' onClick={showPreviousPage}>{'<'}</div>
            {Array(pages).fill().map((item, i) => (
                <div className={currentPage === i + 1 ? 'pagination-item active' : 'pagination-item'} onClick={() => setCurrentPage(i + 1)}>{i + 1}</div>
            ))}
            <div className='pagination-item' onClick={showNextPage}>{'>'}</div>
            <div className='view'>
                <select onChange={(e) => setNewPageLimit(Number(e.target.value))}>
                    <option value="5">5</option>
                    <option selected value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <div>Visar {currentPage * currentPageLimit - (currentPageLimit - 1)} - {currentPage * currentPageLimit} of {pages * currentPageLimit}</div>
            </div>
        </div>
    );
};

export default Pagination;
