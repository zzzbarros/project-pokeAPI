import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Lista, PokeContainer, Title, Poke, LoadingView} from './styles'

import Pagination from '../Pagination'

export default function PokeList() {

    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios.get(currentPageUrl)
        .then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })
        .catch((err) => console.log(err))
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return <LoadingView><strong>Loading...</strong></LoadingView>
    return(
        <>
        <Container>
            <Title>Lista de Pokemons</Title>
            <Lista>
                <Pagination gotoPrevPage = {prevPageUrl ? gotoPrevPage : null} />
                <PokeContainer>
                    {pokemon.map(p => (
                        <Poke key={p}>{p}</Poke>))}
                </PokeContainer>
                <Pagination gotoNextPage = {nextPageUrl ? gotoNextPage : null} />
            </Lista>
        </Container>
        </>
    )
}
