import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Main, Title, BtnContent, SearchContent, Container, Section, Article, PokeContainer, Poke, LoadingView, PokeView, TypeArea } from './styles'

import Pagination from '../Pagination'

export default function PokeList() {


    
    //add busca de pokemon
    const [searchInput, setSearchInput] = useState('')
    const [pokeInfo, setPokeInfo] = useState([])
    
    function searchPokemon() {
        let getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(`${getPokemonUrl}/${searchInput}`)
        .then(res => {

            if(res.data.types.length > 1) {
                setPokeInfo([{
                    pokeId: res.data.id,
                    pokeName: res.data.name,
                    pokeImage: res.data.sprites.front_default,
                    pokeType1: res.data.types[0].type.name,
                    pokeType2: res.data.types[1].type.name
                }])
            } else { 
                setPokeInfo([{
                    pokeId: res.data.id,
                    pokeName: res.data.name,
                    pokeImage: res.data.sprites.front_default,
                    pokeType1: res.data.types[0].type.name
                }])
                }
            setSearchInput('')
            console.log(res)
        })
        console.log(searchInput)
    }


    ////////////////////////////////////

    const [pokemon, setPokemon] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [count, setCount] = useState(20)
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
        {count === 1100 ? setCount(count + 18) : setCount(count + 20)}
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
        {count === 1118 ? setCount(count - 18) : setCount(count - 20)}
    }


    if (loading) return <LoadingView><strong>Loading...</strong></LoadingView>
    return(
        <Main>
            <Title>Pesquise por Pokemons</Title>
            
            <SearchContent>
                <input type="text" placeholder="Search Pokemon..." 
                    onChange={(e) => setSearchInput(e.target.value)} />
                <button type="button" onClick={searchPokemon}>Procurar</button>
            </SearchContent>

            <Container>
                <Section>

                    <Article>

                        <PokeView>
                            {pokeInfo.map(pokeDados => (
                                <>
                                    <img src={pokeDados.pokeImage} alt={pokeDados.pokeName}/>
                                    <strong>#{pokeDados.pokeId}</strong>
                                    <strong>{pokeDados.pokeName}</strong>
                                    <TypeArea>
                                        <strong estilo={pokeDados.pokeType1}>{pokeDados.pokeType1}</strong>
                                        {pokeDados.pokeType2 ? <strong>{pokeDados.pokeType2}</strong> : <></>}
                                    </TypeArea>
                                </>
                            ))}
                        </PokeView>
                        

                    </Article>

                    <Article>

                        <BtnContent>
                            <h2>Lista de Pokemons</h2>
                        </BtnContent>
                        <BtnContent>
                            <Pagination gotoPrevPage = {prevPageUrl ? gotoPrevPage : null} />
                            <strong>{count}/1118</strong>
                            <Pagination gotoNextPage = {nextPageUrl ? gotoNextPage : null} />
                        </BtnContent>
                        
                        <PokeContainer>
                            {pokemon.map(p => (
                            <Poke key={p}>{p}</Poke>))}
                        </PokeContainer>

                    </Article>
                    
                </Section>
            </Container>
        
        </Main>
    )
}
