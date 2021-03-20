import React from 'react'
import { Container, FooterContent, MyLogo } from './styles'

import Logo from '../Logo'

const Footer = () => {
    return (
        <Container>
            <FooterContent>
                <MyLogo href="https://github.com/zzzbarros" >Double| <span>Z</span> </MyLogo>
                <Logo size="small" />
            </FooterContent>
        </Container>
    )
}

export default Footer
