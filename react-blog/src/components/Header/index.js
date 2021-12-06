import React from 'react'

import {Image, Overlay} from './Header.style'

// Image
import headerImage from '../../images/header2.jpg'

import '../type'


const Header = () => {
    return (
        <>
        <Image image={headerImage}>
            <Overlay>
            <p>This pen is <span
                className="txt-rotate"
                data-period="2000"
                data-rotate='[ "nerdy.", "simple.", "pure JS.", "pretty.", "fun!" ]'></span>
            </p>
            </Overlay>
        </Image>
        </>
    )
}

export default Header