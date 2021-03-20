import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ef5350;
`

export const FooterContent = styled.footer`
    width: 100%;
    max-width: 1260px;
    padding: 2em 30px;
    display: flex;
    justify-content: center;
`

export const MyLogo = styled.a`
    font-size: 2em;
    font-weight: bold;
    color: #272727;
    border: 3px solid;
    padding: 8px 10px;
    text-decoration: none;
    transition: all ease-out .25s;

    span {
        color: #FFF;
        transition: all ease-out .5s;
    }

    :hover {
        color: #FFF;
        border: 3px solid #FFF;

        span {
            color: #00C2FF;
        }
    }
`
