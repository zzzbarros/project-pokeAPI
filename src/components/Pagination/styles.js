import styled from 'styled-components'


export const Container = styled.div`
    min-width: 100px;
`

export const Button = styled.button`
    min-width: 70px;
    display: flex;
    justify-content: center;
    padding: 8px;
    background: none;
    border: 1px solid;
    border-radius: 100px;
    transition: all ease-out .25s;
    cursor: pointer;
    outline: none;

    :hover {
        border-color: #EF5350;
        color: #FFF;
        background: #EF5350;
    }

` 