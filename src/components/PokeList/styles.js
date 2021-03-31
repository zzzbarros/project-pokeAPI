import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    display: flex;
    margin: 5em auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.p`
    width: 100%;
    max-width: 1230px;
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding: 0 30px;
    text-align: center;
    font-size: 2em;
    margin-bottom: 1em;

    ::before, ::after {
        content: " ";
        display: flex;
        width: 15%;
        height: 0.09px;
        bottom: 6px;
        margin:0 2em;
        position: relative;
        background: #FFF;
        box-shadow: 0px  -1.5px 1px #909090;
    }
`

export const SearchContent = styled.div`
    width: 100%;
    max-width: 1230px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 3em 0;
    margin-bottom: 3em;

    input {
        width: 40%;
        padding: 5px;
        height: 40px;
        border: 2px solid #909090;
        border-radius: 4px 0px 0px 4px;

        ::focus {
            border-radius: 4px 0px 0px 4px;
        }
    }

    button {
        padding: 8px 10px;
        background: #EF5350;
        font-weight: bold;
        border: solid #EF5350;
        border-radius: 0px 4px 4px 0px;
        color: #FFF;
        transition: all ease-out .1s;
    }

    button:hover {
        cursor: pointer;
        background: #EF5345;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const Section = styled.section`
    width: 100%;
    max-width: 1230px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 0 30px;
`

export const Article = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PokeView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;

    img {
        width: 50%;
    }
`

export const TypeArea = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    strong {
        display:flex;
        padding: 4px 10px;
        border: 1px solid;
    }

`

export const BtnContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin-left: auto;
    padding-right: 5em; 

    h2 {
        padding-right: .4em;
    }
    
   
    /* Verificar isso dps */
    strong {
        display: flex;
        align-self: center;
        font-weight: normal;
        font-style: italic;
        font-size: .85em;
    }
`

export const PokeContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding-left: 3em;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;
`

export const Poke = styled.div`
    display: flex;
    padding: 4px 0px;
`

export const LoadingView = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`