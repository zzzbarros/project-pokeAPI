import React from 'react'

import Logo from '../Logo'
import {NavBar, NavContainer, Main} from './styles'

const Header = () => {
    return (
        <>
        <NavBar>
            <NavContainer>
                <Logo size="small"/>
            </NavContainer>
        </NavBar>

        <Main>
            <Logo />
            <p>Developed with The RESTful Pokémon API.</p>
        </Main>
        </>
    )
}

export default Header
