import React from 'react'

import {LogoContainer} from './style'

const Logo = ({size}) => {
    return (
        <LogoContainer>
            <img className={size} src="https://firebasestorage.googleapis.com/v0/b/project-firebase-c495f.appspot.com/o/test_poke_api%2FLogo.png?alt=media&token=22ceaa9a-70c0-4ed6-bb56-bb2da2796c74"></img>
        </LogoContainer>
    )
}

export default Logo
