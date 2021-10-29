import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import { useState, useEffect } from 'react';

import "./Pagination.css"

export default function Pagination({ page, total_pages, handelClick }) {
    page = Number(page);
    const [pagesNums, setPageNums] = useState({
        num1: page,
        num2: page + 1,
        num3: page + 2
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
            }); 
        }*/

        if (!(pagesNums.num1 === page && pagesNums.num2 === page + 1 && pagesNums.num3 === page + 2) ||
            (!(pagesNums.num1 === page - 1 && pagesNums.num2 === page && pagesNums.num3 === page + 1)) ||
            (!(pagesNums.num1 === page - 2 && pagesNums.num2 === page - 1 && pagesNums.num3 === page))) {

            if ((page - 1) % 3 === 0 && page < total_pages - 2) {
                setPageNums({
                    num1: page,
                    num2: page + 1,
                    num3: page + 2
                });
            } else if (page % 3 === 0) {
                setPageNums({
                    num1: page - 2,
                    num2: page - 1,
                    num3: page
                });
            } else {
                setPageNums({
                    num1: page - 1,
                    num2: page,
                    num3: page + 1
                });
            }
        }

        console.log(pagesNums);
    }, [page, total_pages, pagesNums]);

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