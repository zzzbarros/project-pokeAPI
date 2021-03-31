import React from 'react';

import { Button } from './styles'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return(
        <>
            {gotoPrevPage && <Button onClick={gotoPrevPage}>Previous</Button>}    
            {gotoNextPage && <Button onClick={gotoNextPage}>Next</Button>} 
        </>
    )
}