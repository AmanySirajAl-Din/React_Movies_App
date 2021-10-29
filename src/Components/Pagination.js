import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import Movies from '../Pages/Movies';
import { useState, useEffect } from 'react';

import "./Pagination.css"

export default function Pagination({ page, total_pages, handelClick }) {
    const [pagesNums, setPageNums] = useState({
        num1: page,
        num2: 2,
        num3: 3
    });
    useEffect(() => {
        if ((page - 1) % 3 === 0 && page < total_pages - 2) {
            setPageNums({
                num1: page,
                num2: page + 1,
                num3: page + 2
            });
        }/* else if (page  % 3 === 0 && page < total_pages - 2){
            setPageNums({
                num1: page -1,
                num2: page,
                num3: page + 2
            }); */
    }

        console.log("pagesNums " + pagesNums)
    }, [page])

return (
    //onClick={() => redirectToPage("-1")}
    //to={page === 1 ? "#" : `/movies/${page}`} exact component={Movies}
    <nav aria-label='Page navigation example' className="text-center">
        <MDBPagination className='mb-5 text-center d-block'>
            <MDBPaginationItem>
                <MDBPaginationLink onClick={() => handelClick("-1")} className={page === 1 ? "disabled" : ""}> Previous</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBPaginationLink onClick={() => handelClick(pagesNums.num1)} className={page === pagesNums.num1 ? "active fw-2 text-info" : ""}>{pagesNums.num1}</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBPaginationLink onClick={() => handelClick(pagesNums.num2)} className={page === pagesNums.num2 ? "active fw-2 text-info" : ""}>{pagesNums.num2}</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBPaginationLink onClick={() => handelClick(pagesNums.num3)} className={page === pagesNums.num3 ? "active fw-2 text-info" : ""}>{pagesNums.num3}</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
                <MDBPaginationLink onClick={() => handelClick("+1")} className={page === total_pages ? "disabled" : ""}>Next</MDBPaginationLink>
            </MDBPaginationItem>
        </MDBPagination>
    </nav >
);
}