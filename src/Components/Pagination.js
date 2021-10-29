import React from 'react';
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import "./Pagination.css"
export default function Pagination({ page, total_pages }) {
    return (
        <nav aria-label='Page navigation example' className="text-center">
            <MDBPagination className='mb-5 text-center d-block'>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>Previous</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>1</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>2</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>3</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>Next</MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
        </nav>
    );
}