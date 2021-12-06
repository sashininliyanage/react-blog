import React from 'react'

import {Image} from './Header.style'

// Image
import headerImage from '../../images/header1.jpg'



const Header = () => {
    return (
        <>
        <Image image={headerImage}><div className='overlay'></div></Image>
        </>
    )
}

export default Header