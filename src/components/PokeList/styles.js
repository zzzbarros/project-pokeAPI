import styled from 'styled-components'

export const Title = styled.p`
    display: flex;
    justify-content: center;
    align-items: baseline;
    font-size: 2em;

    ::after {
        content: " ";
        display: flex;
        width: 20%;
        height: 1px;
        bottom: 6px;
        margin-left: 2em;
        position: relative;
        border: 1px solid #272727;
        background: #272727;
    }
`

export const Poke = styled.div`
    padding: 4px 0px;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1230px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 30px;
    margin: 10vh auto; 
    background-color: #fff;
`

export const Lista = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 10vh auto;
    padding: 0 30px;
`

export const PokeContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LoadingView = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`