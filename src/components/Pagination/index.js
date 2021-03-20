import React from 'react';

import { Button, Container } from './styles'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return(
        <div>
            <Container>{gotoPrevPage && <Button onClick={gotoPrevPage}>Previous</Button>}</Container>
            <Container>{gotoNextPage && <Button onClick={gotoNextPage}>Next</Button>}</Container>
        </div>
    )
}