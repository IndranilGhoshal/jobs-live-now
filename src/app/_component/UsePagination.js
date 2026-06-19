import React from 'react'
import { Pagination } from '@mui/material';

export default function UsePagination({ handleChangePage, page, currentPage }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px"
        }}>
            <Pagination count={page} page={currentPage} size="large" onChange={(e, value) => handleChangePage(e, value)} />
        </div>
    )
}
